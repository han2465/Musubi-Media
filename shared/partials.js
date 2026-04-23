// Musubi Media — 공통 header / footer partial.
// 각 페이지 에서 <script src="/shared/partials.js"></script> 로드 하면 자동 삽입.
// 네비 업데이트 시 이 파일만 수정하면 전 페이지 반영.

const HEADER_HTML = `
<header class="site-header">
  <div class="inner">
    <a href="/" class="logo">Musubi<span class="logo-dot">.</span><span class="logo-tag">Media</span></a>
    <nav class="nav-links">
      <a href="/#products">Products</a>
      <a href="/about.html">About</a>
      <a href="/#contact">Contact</a>
      <a href="mailto:anthony@musubimedia.com" class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">Get in touch</a>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="inner">
    <div class="logo">Musubi<span class="logo-dot">.</span> Media</div>
    <div>© 2026 Musubi Media LLC · Made in Hawaii</div>
  </div>
</footer>
`;

// inject partials
document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  // fade-up 스크롤 애니메이션
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('in');
  }, { threshold: 0.1 });
  document.querySelectorAll('h1, h2, h3, .product-card, p.fade-target').forEach(el => {
    el.classList.add('fade-up');
    io.observe(el);
  });
});

// 제품 카드 렌더 헬퍼 — products.json 에서 자동 생성
window.MusubiProducts = {
  async renderCards(targetId = 'product-cards') {
    const target = document.getElementById(targetId);
    if (!target) return;
    try {
      const res = await fetch('/data/products.json');
      const data = await res.json();
      target.innerHTML = data.products.map((p) => `
        <a href="/products/${p.slug}.html" class="product-card theme-${p.theme}" data-accent="${p.accent}">
          <div class="product-number">Product ${p.number}</div>
          <div class="status-badge" style="margin-bottom:1.5rem;">
            <span class="status-dot accent-bg"></span>
            <span>${p.category}</span>
          </div>
          <h3 class="serif" style="font-size:1.875rem;margin-bottom:1rem;">
            ${p.name}<br/>
            <span class="italic" style="opacity:0.7;">${p.tagline}</span>
          </h3>
          <p style="opacity:0.7;line-height:1.65;margin-bottom:1.5rem;">
            ${p.description}
          </p>
          <ul style="list-style:none;padding:0;margin:0 0 2rem 0;">
            ${p.features.slice(0, 4).map(f => `
              <li style="display:flex;gap:0.5rem;padding:0.25rem 0;font-size:0.875rem;opacity:0.8;">
                <span class="accent-text">→</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.5;">
            ${p.status}
          </div>
        </a>
      `).join('');
    } catch (e) {
      console.error('[Musubi] failed to load products:', e);
    }
  },
};
