// js/sticky-header.js
(function () {
  const mount = document.getElementById('app-header');
  if (!mount) return;

  const up = (document.currentScript?.dataset?.levelsUp || mount.dataset.levelsUp || '0')|0;
  const base = up > 0 ? '../'.repeat(up) : '/';

  // 보수적으로 절대경로 우선 (/common/header.html)
  const tryPaths = [
    '/common/header.html',
    base + 'common/header.html'
  ];

  function load(pathIdx){
    if (pathIdx >= tryPaths.length){
      mount.innerHTML = '<div style="color:#fff;background:#c00;padding:8px">Header load failed</div>';
      return;
    }
    fetch(tryPaths[pathIdx], {cache:'no-store'})
      .then(r => {
        if(!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(html => {
        mount.innerHTML = html;
        // 보조: 내부 링크 확정
        const brand = mount.querySelector('#brandLink');
        if (brand) brand.setAttribute('href', '/index.html');
        const cta = mount.querySelector('.nft-summary .cta');
        if (cta) cta.setAttribute('href', '/invest/index.html');
      })
      .catch(() => load(pathIdx+1));
  }
  load(0);
})();
