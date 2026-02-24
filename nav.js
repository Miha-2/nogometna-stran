class SiteNav extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || '';

    // Izračunaj relativno pot do korena glede na globino trenutne strani
    const depth = window.location.pathname.split('/').filter(Boolean).length - 1;
    const root = depth > 0 ? '../'.repeat(depth) : '';

    const links = [
      { href: `${root}index.html`,  label: 'Domov' },
      { href: '#',                  label: 'Člani' },
      { href: '#',                  label: 'Akademija' },
      { href: '#',                  label: 'Za starše' },
      { href: `${root}novice.html`, label: 'Novice' },
      { href: '#',                  label: 'Klub' },
    ];

    this.innerHTML = `
      <nav>
        <a href="${root}index.html" class="logo">
          <img src="${root}grb.webp" class="logo-mark" alt="NK Ivančna Gorica grb">
          <div class="logo-txt">NK Ivančna Gorica <span>Gremo Risi!</span></div>
        </a>
        <button class="hamburger" id="hamburger" aria-label="Meni" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${links.map(l => `
            <li><a href="${l.href}" ${l.label.toLowerCase().replace(/č/g,'c').replace(/š/g,'s') === active ? 'class="active"' : ''}>${l.label}</a></li>
          `).join('')}
          <li><a href="${root}vpis.html" class="nav-cta ${active === 'vpis' ? 'active' : ''}">Vpis 2025/26</a></li>
        </ul>
      </nav>
    `;

    // Hamburger toggle
    const btn = this.querySelector('#hamburger');
    const navLinks = this.querySelector('#navLinks');
    btn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', false);
      });
    });
  }
}

customElements.define('site-nav', SiteNav);
