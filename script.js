// ===== Render projects =====
function renderProjects(lang) {
  const groups = { saas: [], app: [], tool: [] };
  projects.forEach(p => groups[p.category].push(p));

  Object.entries(groups).forEach(([cat, list]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.classList.add(`grid-${cat}`);
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

// ===== Render About paragraphs =====
function renderAbout(lang) {
  const el = document.getElementById('about-body');
  if (!el) return;
  const paras = i18n[lang].about.paragraphs;
  el.innerHTML = paras.map(p => `<p>${escapeHTML(p)}</p>`).join('');
}

// ===== Render "On AI" thinking cards =====
function renderThinking(lang) {
  const el = document.getElementById('think-grid');
  if (!el) return;
  const items = i18n[lang].thinking.items;
  el.innerHTML = items.map(t => `
    <article class="think-card">
      <div class="think-tag">${escapeHTML(t.tag)}</div>
      <h3 class="think-title">${escapeHTML(t.title)}</h3>
      <p class="think-hook">${escapeHTML(t.hook)}</p>
      <p class="think-body">${highlight(t.body)}</p>
    </article>
  `).join('');
}

// Highlight project names + numbers in body (bold)
function highlight(s) {
  return escapeHTML(s)
    .replace(/\b(BuddyJob|AIkefu|DataInsight|LifeChart|SalesCoach|AI Radar|ShiftSmart|玄机子)\b/g, '<strong>$1</strong>')
    .replace(/\b(\d+%|\d+x|~?70%|40%)\b/g, '<strong>$1</strong>');
}

function getNestedI18n(lang, path) {
  return path.split('.').reduce((o, k) => o?.[k], i18n[lang]) || '';
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ===== Apply text content for elements with data-i18n =====
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
  renderAbout(lang);
  renderThinking(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});
