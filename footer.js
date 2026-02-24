class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-grid">
          <div>
            <div class="fn">NK Ivančna Gorica</div>
            <div class="ft">Gremo Risi! · Od leta 1973</div>
            <p class="fb">Domači klub iz Ivančne Gorice z bogato tradicijo.</p>
          </div>
          <div class="fc">
            <h4>Klub</h4>
            <ul>
              <li><a href="#">O klubu</a></li>
              <li><a href="#">Vodstvo</a></li>
              <li><a href="#">Stadion</a></li>
            </ul>
          </div>
          <div class="fc">
            <h4>Ekipe</h4>
            <ul>
              <li><a href="#">Člani</a></li>
              <li><a href="#">Akademija</a></li>
              <li><a href="#">Za starše</a></li>
            </ul>
          </div>
          <div class="fc">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:041480615">041 480 615 <span style="color:var(--gray-mid);font-size:11px">(predsednik)</span></a></li>
              <li><a href="tel:041559712">041 559 712 <span style="color:var(--gray-mid);font-size:11px">(sekretar)</span></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bar">
          <span>© 2025 NK Ivančna Gorica</span>
          <span>Ljubljanska cesta 2a, Ivančna Gorica</span>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
