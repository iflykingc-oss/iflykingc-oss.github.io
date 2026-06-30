// ===== Render project cards =====
function renderProjects(lang) {
  const groups = { saas: [], app: [], tool: [] };
  projects.forEach(p => groups[p.category].push(p));

  Object.entries(groups).forEach(([cat, list]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = list.map(p => projectCardHTML(p, lang)).join('');
  });
}

function projectCardHTML(p, lang) {
  const statusKey = 'status' + p.status.charAt(0).toUpperCase() + p.status.slice(1);
  const statusLabel = i18n[lang].card[statusKey];
  const privateBadge = p.private ? `<span class="badge badge-private">${i18n[lang].card.private}</span>` : '';

  const demoBtn = p.demo
    ? `<a class="project-link primary" href="${p.demo}" target="_blank" rel="noopener">${i18n[lang].card.demo}</a>`
    : `<span class="project-link disabled">${i18n[lang].card.demo}</span>`;

  return `
    <article class="project-card">
      <img class="project-cover" src="${p.cover}" alt="${p.name[lang]}" loading="lazy">
      <div class="project-body">
        <div class="project-head">
          <h3 class="project-name">${p.name[lang]}</h3>
          <div class="project-badges">
            <span class="badge badge-${p.status}">${statusLabel}</span>
            ${privateBadge}
          </div>
        </div>
        <p class="project-tagline">${p.tagline[lang]}</p>

        <div class="project-section-title">${i18n[lang].card.tech}</div>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-section-title">${i18n[lang].card.features}</div>
        <ul class="project-features">
          ${p.features[lang].map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="project-actions">
          ${demoBtn}
          <a class="project-link secondary" href="${p.code}" target="_blank" rel="noopener">${i18n[lang].card.code}</a>
        </div>
      </div>
    </article>
  `;
}

// ===== i18n: apply text content for elements with data-i18n =====
function applyI18n(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.getAttribute('data-i18n').split('.');
    let val = i18n[lang];
    for (const k of path) val = val?.[k];
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const [attr, path] = pair.split(':').map(s => s.trim());
      const keys = path.split('.');
      let val = i18n[lang];
      for (const k of keys) val = val?.[k];
      if (val) el.setAttribute(attr, val);
    });
  });
}

// ===== Language switcher =====
let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyI18n(lang);
  renderProjects(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
