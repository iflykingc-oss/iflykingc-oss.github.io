// ===== Render projects =====
function renderProjects(lang) {
  const groups = { saas: [], app: [], tool: [] };
  projects.forEach(p => groups[p.category].push(p));

  Object.entries(groups).forEach(([cat, list]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = list.map(p => cardHTML(p, lang)).join('');
  });
}

function cardHTML(p, lang) {
  const statusKey = 'status' + p.status.charAt(0).toUpperCase() + p.status.slice(1);
  const statusLabel = i18n[lang].card[statusKey];
  const catKey = 'sectionTitle.' + (p.category === 'saas' ? 'saas' : p.category === 'app' ? 'apps' : 'tools');
  const catLabel = getNestedI18n(lang, catKey);
  const archivedClass = p.status === 'sunset' ? ' archived' : '';

  const demoBtn = p.demo
    ? `<a class="card-link primary" href="${p.demo}" target="_blank" rel="noopener">${i18n[lang].card.demo} →</a>`
    : `<span class="card-link disabled">${i18n[lang].card.demo}</span>`;

  const accentStyle = p.accent ? `--accent: ${p.accent};` : '';

  return `
    <article class="card${archivedClass}" style="${accentStyle}">
      <div class="card-cover">
        <img src="${p.cover}" alt="${p.name[lang]}" loading="lazy">
        <div class="card-cover-overlay">
          <span class="card-cat">${catLabel}</span>
          <h3 class="card-name">${p.name[lang]}</h3>
        </div>
        <span class="card-status-dot ${p.status}">${statusLabel}</span>
        ${p.private ? `<span class="card-private">🔒 ${i18n[lang].card.private}</span>` : ''}
      </div>
      <div class="card-body">
        <p class="card-tagline">${p.tagline[lang]}</p>

        ${p.tech[0] !== '—' ? `
        <div>
          <div class="card-section-label">${i18n[lang].card.tech}</div>
          <div class="card-tech">${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
        </div>` : ''}

        <div>
          <div class="card-section-label">${i18n[lang].card.features}</div>
          <ul class="card-features">
            ${p.features[lang].map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="card-actions">
          ${demoBtn}
          <a class="card-link secondary" href="${p.code}" target="_blank" rel="noopener">${i18n[lang].card.code}</a>
        </div>
      </div>
    </article>
  `;
}

function getNestedI18n(lang, path) {
  return path.split('.').reduce((o, k) => o?.[k], i18n[lang]) || '';
}

// ===== i18n: text content for elements with data-i18n =====
function applyI18n(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getNestedI18n(lang, el.getAttribute('data-i18n'));
    if (val) el.textContent = val;
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
