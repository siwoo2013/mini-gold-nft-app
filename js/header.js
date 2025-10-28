// js/header.js
// Inject the reusable fixed header into <div id="app-header"></div>
(function () {
  const mount = document.getElementById('app-header');
  if (!mount) return;

  // Resolve base path for subfolders (e.g., /event/index.html)
  // We assume the site root has index.html, and top-level sections live under /event, /invest, /service
  const levelsUp = (document.currentScript?.dataset?.levelsUp || mount.dataset.levelsUp || '0')|0;
  const base = levelsUp > 0 ? '../'.repeat(levelsUp) : '';

  fetch(base + 'common/header.html', {cache:'no-store'})
    .then(r => r.text())
    .then(html => {
      mount.innerHTML = html;
      // Fix internal links for subpages when using relative base
      const brand = mount.querySelector('#brandLink');
      if (brand) brand.setAttribute('href', base + 'index.html');
      const ctas = mount.querySelectorAll('.nft-summary .cta');
      ctas.forEach(a => a.setAttribute('href', base + 'invest/index.html'));
    })
    .catch(err => {
      console.error('header load failed', err);
      mount.innerHTML = '<div style="color:#fff;background:#c00;padding:8px">Header load failed</div>';
    });
})();
