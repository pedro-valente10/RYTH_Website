import logoUrl from "../../assets/icons/ryth-logo.svg";
import footerHtml from "./footer.html?raw";

export function renderFooter(rootSelector: string = "#footer-root"): void {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  // Injeta o HTML na página
  root.innerHTML = footerHtml;

  // Insere dinamicamente o caminho do logo processado pelo bundler
  const logoImage = root.querySelector("#footer-logo") as HTMLImageElement;
  if (logoImage) {
    logoImage.src = logoUrl;
  }
}