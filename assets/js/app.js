/**
 * ============================================================================
 * ALSTOM IS&T HANDOVER PORTAL - LÓGICA DE INTERFAZ
 * ============================================================================
 */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    checklist: "alstom_ist_checklist_v1",
    theme: "alstom_ist_theme_v1",
    highlight: "alstom_ist_highlight_placeholders_v1"
  };

  const state = {
    checkedIds: loadCheckedIds(),
    activePhase: "Todas",
    activeCategory: "Todas",
    searchQuery: "",
    expandedGuides: new Set(["como-iniciar"])
  };

  const data = window.HANDOVER_DATA;

  // ==========================================================================
  // UTILIDADES
  // ==========================================================================

  function loadCheckedIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.checklist);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  }

  function saveCheckedIds() {
    try {
      localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify([...state.checkedIds]));
    } catch {
      // Ignorar si el almacenamiento local está bloqueado
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || "").trim();
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const msgEl = document.getElementById("toast-message");
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.remove("hide");
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 2400);
  }

  async function copyToClipboard(text, label = "¡Copiado al portapapeles!") {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      showToast(label);
    } catch {
      showToast("No se pudo copiar automáticamente. Selecciona el texto manualmente.");
    }
  }

  // ==========================================================================
  // RENDERIZADO INICIAL DE METADATA Y SECCIONES ESTÁTICAS
  // ==========================================================================

  function renderMeta() {
    const { meta, backupRepo, guides } = data;
    document.getElementById("meta-welcome").textContent = meta.welcomeNote;
    document.getElementById("meta-location").innerHTML = meta.siteLocation;
    document.getElementById("meta-period").innerHTML = meta.period;
    document.getElementById("meta-outgoing").innerHTML = meta.outgoingIntern;

    document.getElementById("footer-updated").textContent = meta.lastUpdated;
    document.getElementById("footer-author").innerHTML = meta.outgoingIntern;

    document.getElementById("stat-folders-count").textContent = backupRepo.folders.length;
    document.getElementById("stat-guides-count").textContent = guides.length;
  }

  function renderBackupSection() {
    const { backupRepo } = data;
    const query = state.searchQuery.trim().toLowerCase();

    document.getElementById("backup-summary").textContent = backupRepo.summary;
    document.getElementById("backup-repo-slug").innerHTML = backupRepo.repoSlug;
    document.getElementById("backup-github-url").innerHTML = backupRepo.githubUrl;
    document.getElementById("backup-cloud-url").innerHTML = backupRepo.cloudFolderUrl;
    document.getElementById("backup-local-path").innerHTML = backupRepo.localPath;

    const foldersGrid = document.getElementById("backup-folders-grid");
    const matchingFolders = backupRepo.folders.filter((f) => {
      if (!query) return true;
      return `${f.name} ${stripHtml(f.description)}`.toLowerCase().includes(query);
    });

    foldersGrid.innerHTML = matchingFolders.length
      ? matchingFolders
          .map(
            (folder) => `
        <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-alstom-blue dark:hover:border-sky-500 transition">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="p-2 rounded-lg bg-alstom-blue/10 text-alstom-blue dark:text-sky-400">
              <i data-lucide="${escapeHtml(folder.icon)}" class="w-4 h-4"></i>
            </span>
            <h4 class="font-mono text-sm font-bold text-slate-900 dark:text-white break-all">${escapeHtml(folder.name)}</h4>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${folder.description}</p>
        </div>`
          )
          .join("")
      : `<p class="col-span-full text-xs text-slate-500 italic">No hay carpetas que coincidan con "${escapeHtml(state.searchQuery)}".</p>`;

    const docsGrid = document.getElementById("backup-docs-grid");
    const matchingDocs = backupRepo.keyDocuments.filter((doc) => {
      if (!query) return true;
      return `${doc.title} ${doc.folder} ${doc.format} ${stripHtml(doc.description)}`.toLowerCase().includes(query);
    });

    docsGrid.innerHTML = matchingDocs.length
      ? matchingDocs
          .map(
            (doc) => `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-sm">
          <div>
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                ${escapeHtml(doc.folder)}
              </span>
              <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-alstom-blue dark:text-sky-400">
                ${escapeHtml(doc.format)}
              </span>
            </div>
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(doc.title)}</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${doc.description}</p>
          </div>
          <div class="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
            Actualizado: ${doc.updated}
          </div>
        </div>`
          )
          .join("")
      : `<p class="col-span-full text-xs text-slate-500 italic">No hay documentos que coincidan con "${escapeHtml(state.searchQuery)}".</p>`;
  }

  function renderNetworkProject() {
    const net = data.networkProject;
    document.getElementById("net-title").textContent = net.title;
    document.getElementById("net-status").textContent = net.status;
    document.getElementById("net-overview").textContent = net.overview;
    document.getElementById("net-repo-slug").innerHTML = net.repoSlug;
    document.getElementById("net-owner").innerHTML = net.ownerRole;

    document.getElementById("net-assets-list").innerHTML = net.monitoredAssets
      .map(
        (asset) => `
        <li class="flex items-start gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
          <span>${escapeHtml(asset)}</span>
        </li>`
      )
      .join("");

    document.getElementById("net-stack-badges").innerHTML = net.techStack
      .map(
        (tech) => `
        <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
          ${tech}
        </span>`
      )
      .join("");

    document.getElementById("net-access-steps").innerHTML = net.accessSteps
      .map(
        (item) => `
        <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex gap-3.5">
          <div class="w-7 h-7 rounded-full bg-alstom-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
            ${item.step}
          </div>
          <div class="space-y-1">
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(item.title)}</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.detail}</p>
          </div>
        </div>`
      )
      .join("");

    document.getElementById("net-request-template").textContent = net.requestTemplate;
    document.getElementById("net-setup-commands").textContent = net.setupCommands;
  }

  // ==========================================================================
  // CHECKLIST INTERACTIVO
  // ==========================================================================

  function renderChecklist() {
    const items = data.checklist;
    const total = items.length;
    const completedCount = items.filter((item) => state.checkedIds.has(item.id)).length;
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    document.getElementById("checklist-progress-bar").style.width = `${percent}%`;
    document.getElementById("checklist-progress-text").textContent = `${completedCount} de ${total} completadas (${percent}%)`;
    document.getElementById("stat-checklist-progress").textContent = `${percent}%`;

    const query = state.searchQuery.trim().toLowerCase();
    const filtered = items.filter((item) => {
      const phaseMatches = state.activePhase === "Todas" || item.phase === state.activePhase;
      if (!phaseMatches) return false;
      if (!query) return true;
      return `${item.title} ${stripHtml(item.description)} ${item.tag} ${item.phase}`.toLowerCase().includes(query);
    });

    const container = document.getElementById("checklist-container");
    if (!filtered.length) {
      container.innerHTML = `<p class="py-6 text-center text-xs text-slate-500">No hay tareas en esta fase o búsqueda.</p>`;
      return;
    }

    container.innerHTML = filtered
      .map((item) => {
        const checked = state.checkedIds.has(item.id);
        return `
        <label class="flex items-start gap-3.5 py-3.5 cursor-pointer group">
          <input
            type="checkbox"
            data-chk-id="${escapeHtml(item.id)}"
            ${checked ? "checked" : ""}
            class="mt-1 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-alstom-blue focus:ring-alstom-blue cursor-pointer"
          />
          <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm font-semibold ${
                checked ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-slate-100 group-hover:text-alstom-blue"
              } transition-colors">
                ${escapeHtml(item.title)}
              </span>
              <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                ${escapeHtml(item.phase)}
              </span>
              <span class="text-[10px] font-medium px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-alstom-blue dark:text-sky-400">
                ${escapeHtml(item.tag)}
              </span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${item.description}</p>
          </div>
        </label>`;
      })
      .join("");
  }

  // ==========================================================================
  // GUÍAS TÉCNICAS PASO A PASO
  // ==========================================================================

  function guideMatchesQuery(guide, query) {
    if (!query) return true;
    const stepsText = guide.steps
      .map((s) => `${s.title} ${stripHtml(s.description)} ${s.command || ""} ${s.tip || ""} ${s.warning || ""}`)
      .join(" ");
    const haystack = `${guide.title} ${guide.category} ${guide.summary} ${stripHtml(guide.prerequisites.join(" "))} ${stepsText} ${guide.troubleshooting.join(" ")}`.toLowerCase();
    return haystack.includes(query);
  }

  function renderGuides() {
    const query = state.searchQuery.trim().toLowerCase();
    const filtered = data.guides.filter((guide) => {
      const catMatch = state.activeCategory === "Todas" || guide.category === state.activeCategory;
      return catMatch && guideMatchesQuery(guide, query);
    });

    const container = document.getElementById("guides-container");
    const emptyState = document.getElementById("guides-empty-state");

    if (!filtered.length) {
      container.innerHTML = "";
      emptyState.classList.remove("hidden");
      refreshIcons();
      return;
    }

    emptyState.classList.add("hidden");

    container.innerHTML = filtered
      .map((guide) => {
        const isExpanded = Boolean(query) || state.expandedGuides.has(guide.id);
        return `
        <article
          id="guide-${escapeHtml(guide.id)}"
          data-guide-id="${escapeHtml(guide.id)}"
          data-expanded="${isExpanded}"
          class="guide-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition hover:border-slate-300 dark:hover:border-slate-700"
        >
          <!-- Guide Header Toggle -->
          <button
            type="button"
            data-toggle-guide="${escapeHtml(guide.id)}"
            aria-expanded="${isExpanded}"
            class="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition"
          >
            <div class="flex items-start gap-4 min-w-0">
              <div class="p-3 rounded-xl bg-alstom-navy/10 dark:bg-sky-500/15 text-alstom-navy dark:text-sky-400 shrink-0">
                <i data-lucide="${escapeHtml(guide.icon)}" class="w-5 h-5"></i>
              </div>
              <div class="space-y-1.5 min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-alstom-blue dark:text-sky-400">
                    ${escapeHtml(guide.category)}
                  </span>
                  <span class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <i data-lucide="clock" class="w-3 h-3"></i>
                    ${escapeHtml(guide.estimatedTime)}
                  </span>
                  <span class="text-[11px] text-slate-500 dark:text-slate-400">
                    &bull; Nivel: ${escapeHtml(guide.difficulty)}
                  </span>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  ${escapeHtml(guide.title)}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${escapeHtml(guide.summary)}
                </p>
              </div>
            </div>

            <i
              data-lucide="chevron-down"
              class="guide-chevron w-5 h-5 text-slate-400 shrink-0 mt-1 transition-transform duration-200"
            ></i>
          </button>

          <!-- Guide Body -->
          <div class="guide-body ${isExpanded ? "block" : "hidden"} border-t border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-6 bg-slate-50/40 dark:bg-slate-950/20">
            <!-- Prerequisites -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <i data-lucide="list-checks" class="w-4 h-4 text-alstom-blue"></i>
                Requisitos previos
              </h4>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                ${guide.prerequisites
                  .map(
                    (req) => `
                  <li class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-alstom-blue mt-2 shrink-0"></span>
                    <span>${req}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>

            <!-- Steps Timeline -->
            <div class="space-y-4">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Procedimiento paso a paso
              </h4>
              <div class="space-y-5">
                ${guide.steps
                  .map(
                    (step, idx) => `
                  <div class="step-item relative pl-11">
                    <div class="absolute left-0 top-0 w-8 h-8 rounded-full bg-alstom-blue text-white text-xs font-bold flex items-center justify-center shadow-sm">
                      ${idx + 1}
                    </div>
                    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
                      <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        ${escapeHtml(step.title)}
                      </h5>
                      <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        ${step.description}
                      </div>

                      ${
                        step.command
                          ? `
                        <div class="relative group">
                          <button
                            type="button"
                            data-copy-text="${escapeHtml(step.command)}"
                            class="absolute right-2.5 top-2.5 inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                          >
                            <i data-lucide="copy" class="w-3 h-3"></i>
                            Copiar
                          </button>
                          <pre class="text-xs font-mono bg-slate-900 text-sky-300 p-3.5 pr-20 rounded-lg overflow-x-auto leading-relaxed">${escapeHtml(step.command)}</pre>
                        </div>`
                          : ""
                      }

                      ${
                        step.tip
                          ? `
                        <div class="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200">
                          <i data-lucide="lightbulb" class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"></i>
                          <div><strong>Tip:</strong> ${step.tip}</div>
                        </div>`
                          : ""
                      }

                      ${
                        step.warning
                          ? `
                        <div class="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
                          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"></i>
                          <div><strong>Importante:</strong> ${step.warning}</div>
                        </div>`
                          : ""
                      }
                    </div>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>

            <!-- Troubleshooting -->
            ${
              guide.troubleshooting && guide.troubleshooting.length
                ? `
              <div class="bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 space-y-2">
                <h4 class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <i data-lucide="life-buoy" class="w-4 h-4"></i>
                  Solución de problemas comunes
                </h4>
                <ul class="space-y-1.5 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
                  ${guide.troubleshooting
                    .map(
                      (item) => `
                    <li class="flex items-start gap-2">
                      <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                      <span>${item}</span>
                    </li>`
                    )
                    .join("")}
                </ul>
              </div>`
                : ""
            }
          </div>
        </article>`;
      })
      .join("");
  }

  // ==========================================================================
  // CONTACTOS Y PREGUNTAS FRECUENTES
  // ==========================================================================

  function renderContactsAndFaqs() {
    const query = state.searchQuery.trim().toLowerCase();

    const filteredContacts = data.contacts.filter((c) => {
      if (!query) return true;
      return `${c.role} ${c.scope}`.toLowerCase().includes(query);
    });

    const tbody = document.getElementById("contacts-table-body");
    tbody.innerHTML = filteredContacts.length
      ? filteredContacts
          .map(
            (c) => `
        <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
          <td class="py-3.5 px-5 font-semibold text-slate-900 dark:text-white">${escapeHtml(c.role)}</td>
          <td class="py-3.5 px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">${escapeHtml(c.scope)}</td>
        </tr>`
          )
          .join("")
      : `<tr><td colspan="2" class="py-6 text-center text-xs text-slate-500">No hay roles que coincidan con "${escapeHtml(state.searchQuery)}".</td></tr>`;

    const filteredFaqs = data.faqs.filter((f) => {
      if (!query) return true;
      return `${f.q} ${stripHtml(f.a)}`.toLowerCase().includes(query);
    });

    const faqContainer = document.getElementById("faq-container");
    faqContainer.innerHTML = filteredFaqs.length
      ? filteredFaqs
          .map(
            (faq) => `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-2 shadow-sm">
          <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">${escapeHtml(faq.q)}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${faq.a}</p>
        </div>`
          )
          .join("")
      : `<p class="col-span-full text-xs text-slate-500 italic">Sin preguntas frecuentes para esta búsqueda.</p>`;
  }

  // ==========================================================================
  // BÚSQUEDA GLOBAL Y RENDER COMPLETO
  // ==========================================================================

  function updateSearchBanner() {
    const banner = document.getElementById("search-results-banner");
    const textEl = document.getElementById("search-results-text");
    const clearBtn = document.getElementById("clear-search-btn");
    const q = state.searchQuery.trim();

    if (q) {
      clearBtn.classList.remove("hidden");
      banner.classList.remove("hidden");
      textEl.innerHTML = `Filtrando contenido por: <strong>"${escapeHtml(q)}"</strong>`;
    } else {
      clearBtn.classList.add("hidden");
      banner.classList.add("hidden");
    }
  }

  function renderAllFiltered() {
    updateSearchBanner();
    renderChecklist();
    renderBackupSection();
    renderGuides();
    renderContactsAndFaqs();
    refreshIcons();
  }

  // ==========================================================================
  // TEMA (DARK / LIGHT) Y RESALTADO DE EDITABLES
  // ==========================================================================

  function initThemeAndHighlight() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    }

    const savedHighlight = localStorage.getItem(STORAGE_KEYS.highlight);
    if (savedHighlight === "true") {
      document.body.classList.add("highlight-placeholders");
      const btn = document.getElementById("toggle-placeholders-btn");
      btn.classList.add("ring-2", "ring-amber-400", "bg-amber-50", "dark:bg-amber-950/40");
    }
  }

  function setupTopBarActions() {
    const searchInput = document.getElementById("global-search");
    const clearBtn = document.getElementById("clear-search-btn");
    const bannerClearBtn = document.getElementById("banner-clear-search");

    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderAllFiltered();
    });

    function clearSearch() {
      state.searchQuery = "";
      searchInput.value = "";
      renderAllFiltered();
      searchInput.focus();
    }

    clearBtn.addEventListener("click", clearSearch);
    bannerClearBtn.addEventListener("click", clearSearch);

    // Atajos de teclado '/' o 'Ctrl+K' para buscar
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInput.focus();
      } else if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        searchInput.focus();
      }
    });

    // Toggle Tema
    document.getElementById("toggle-theme-btn").addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
    });

    // Toggle Resaltar Editables
    const placeholderBtn = document.getElementById("toggle-placeholders-btn");
    placeholderBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("highlight-placeholders");
      localStorage.setItem(STORAGE_KEYS.highlight, active ? "true" : "false");
      placeholderBtn.classList.toggle("ring-2", active);
      placeholderBtn.classList.toggle("ring-amber-400", active);
      placeholderBtn.classList.toggle("bg-amber-50", active);
      placeholderBtn.classList.toggle("dark:bg-amber-950/40", active);
      showToast(active ? "Campos por personalizar resaltados" : "Resaltado desactivado");
    });
  }

  // ==========================================================================
  // NAVEGACIÓN MÓVIL, SCROLLSPY Y EVENTOS DELEGADOS
  // ==========================================================================

  function setupNavigation() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const menuBtn = document.getElementById("mobile-menu-btn");

    function closeSidebar() {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    function openSidebar() {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    }

    menuBtn.addEventListener("click", openSidebar);
    overlay.addEventListener("click", closeSidebar);

    document.querySelectorAll("#sidebar a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 1024) closeSidebar();
      });
    });

    // Accesos directos del sidebar a guías específicas
    document.querySelectorAll("[data-jump-guide]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const guideId = btn.getAttribute("data-jump-guide");
        state.activeCategory = "Todas";
        state.searchQuery = "";
        document.getElementById("global-search").value = "";
        state.expandedGuides.add(guideId);
        updateCategoryPillsUI();
        renderAllFiltered();

        if (window.innerWidth < 1024) closeSidebar();

        const targetEl = document.getElementById(`guide-${guideId}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // ScrollSpy para marcar sección activa
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("aside a.nav-link");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("data-nav-target") === id);
              });
            }
          });
        },
        { rootMargin: "-20% 0px -65% 0px" }
      );
      sections.forEach((sec) => observer.observe(sec));
    }
  }

  function updateCategoryPillsUI() {
    document.querySelectorAll("#guide-category-filters .guide-filter-btn").forEach((btn) => {
      const cat = btn.getAttribute("data-category");
      const active = cat === state.activeCategory;
      btn.classList.toggle("active", active);
      btn.classList.toggle("bg-alstom-navy", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("bg-white", !active);
      btn.classList.toggle("dark:bg-slate-900", !active);
      btn.classList.toggle("text-slate-600", !active);
      btn.classList.toggle("dark:text-slate-300", !active);
    });
  }

  function setupInteractions() {
    // Checklist checkboxes (delegado)
    document.getElementById("checklist-container").addEventListener("change", (e) => {
      const chk = e.target.closest("input[data-chk-id]");
      if (!chk) return;
      const id = chk.getAttribute("data-chk-id");
      if (chk.checked) {
        state.checkedIds.add(id);
      } else {
        state.checkedIds.delete(id);
      }
      saveCheckedIds();
      renderChecklist();
    });

    // Checklist phase tabs
    document.getElementById("checklist-phase-tabs").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-phase]");
      if (!btn) return;
      state.activePhase = btn.getAttribute("data-phase");

      document.querySelectorAll("#checklist-phase-tabs .phase-tab").forEach((tab) => {
        const isActive = tab === btn;
        tab.classList.toggle("bg-alstom-navy", isActive);
        tab.classList.toggle("text-white", isActive);
        tab.classList.toggle("bg-slate-100", !isActive);
        tab.classList.toggle("dark:bg-slate-800", !isActive);
        tab.classList.toggle("text-slate-600", !isActive);
        tab.classList.toggle("dark:text-slate-300", !isActive);
      });

      renderChecklist();
    });

    // Reset checklist
    document.getElementById("reset-checklist-btn").addEventListener("click", () => {
      state.checkedIds.clear();
      saveCheckedIds();
      renderChecklist();
      showToast("Progreso del checklist reiniciado");
    });

    // Copiar plantilla y comandos de monitoreo
    document.getElementById("copy-template-btn").addEventListener("click", () => {
      copyToClipboard(data.networkProject.requestTemplate, "¡Plantilla de correo copiada!");
    });

    document.getElementById("copy-setup-btn").addEventListener("click", () => {
      copyToClipboard(data.networkProject.setupCommands, "¡Comandos copiados!");
    });

    // Filtros de categoría de guías
    document.getElementById("guide-category-filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-category]");
      if (!btn) return;
      state.activeCategory = btn.getAttribute("data-category");
      updateCategoryPillsUI();
      renderGuides();
      refreshIcons();
    });

    // Expandir / Colapsar todas las guías
    document.getElementById("expand-all-guides-btn").addEventListener("click", () => {
      data.guides.forEach((g) => state.expandedGuides.add(g.id));
      renderGuides();
      refreshIcons();
    });

    document.getElementById("collapse-all-guides-btn").addEventListener("click", () => {
      state.expandedGuides.clear();
      renderGuides();
      refreshIcons();
    });

    // Toggle acordeón individual & copiar comandos dentro de guías
    document.getElementById("guides-container").addEventListener("click", (e) => {
      const copyBtn = e.target.closest("button[data-copy-text]");
      if (copyBtn) {
        e.stopPropagation();
        copyToClipboard(copyBtn.getAttribute("data-copy-text"), "¡Comando copiado!");
        return;
      }

      const toggleBtn = e.target.closest("button[data-toggle-guide]");
      if (toggleBtn) {
        const guideId = toggleBtn.getAttribute("data-toggle-guide");
        if (state.expandedGuides.has(guideId)) {
          state.expandedGuides.delete(guideId);
        } else {
          state.expandedGuides.add(guideId);
        }
        renderGuides();
        refreshIcons();
      }
    });
  }

  // ==========================================================================
  // INICIALIZACIÓN
  // ==========================================================================

  function init() {
    if (!data) return;
    initThemeAndHighlight();
    renderMeta();
    renderNetworkProject();
    renderAllFiltered();
    setupTopBarActions();
    setupNavigation();
    setupInteractions();
    refreshIcons();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
