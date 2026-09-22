import logoUrl from "../../assets/icons/ryth-logo.svg";

const navbarTemplate = `
  <nav class="navbar">
    <a href="/" class="navbar__brand">
      <img src="${logoUrl}" alt="RYTH" class="navbar__logo" />
      <span class="navbar__wordmark">RYTH</span>
    </a>

    <ul class="navbar__links">
      <li class="navbar__link">
        <a href="/contratacao">Contratação</a>
      </li>
      <li class="navbar__link">
        <a href="/competicoes">Competições</a>
      </li>
      <li class="navbar__link navbar__link--login">
        <a href="/login">Login</a>
      </li>
    </ul>

    <button class="navbar__search" aria-label="Buscar">
      <!-- ícone de lupa -->
    </button>
  </nav>
`;

export function renderNavbar(rootSelector: string = "#navbar-root"): void {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.innerHTML = navbarTemplate;
}