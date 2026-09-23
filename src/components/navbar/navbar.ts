import logoUrl from "../../assets/icons/ryth-logo.svg";
import navbarHtml from "./navbar.html?raw";

export function renderNavbar(rootSelector: string = "#navbar-root"): void {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  // Injeta o HTML na página
  root.innerHTML = navbarHtml;

  // Insere dinamicamente o caminho do logo processado pelo bundler
  const logoImage = root.querySelector("#navbar-logo") as HTMLImageElement;
  if (logoImage) {
    logoImage.src = logoUrl;
  }
}