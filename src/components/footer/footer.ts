const footerTemplate = `
  <footer class="footer">
    <div class="footer__brand">
      <div class="footer__logo">
        <!-- ícone "R" da RYTH -->
      </div>
      <span class="footer__wordmark">RYTH</span>
    </div>

    <p class="footer__text">
      A RYTH conecta dança, música e mercado para transformar talento em
      oportunidade real. Acompanhe nossas redes sociais e faça parte de uma
      comunidade que valoriza a criatividade, a autoria e o desenvolvimento
      de novos talentos.
    </p>

    <div class="footer__social">
      <a href="#" class="footer__social-icon" aria-label="Instagram">
        <!-- ícone Instagram -->
      </a>
      <a href="#" class="footer__social-icon" aria-label="TikTok">
        <!-- ícone TikTok -->
      </a>
    </div>
  </footer>
`;

export function renderFooter(rootSelector: string = "#footer-root"): void {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.innerHTML = footerTemplate;
}