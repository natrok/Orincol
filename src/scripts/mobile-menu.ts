// Mobile menu accordions. Loaded from MobileMenu.astro via `import "../scripts/mobile-menu"`.

const accordionToggles = document.querySelectorAll<HTMLButtonElement>("[data-accordion-toggle]");

accordionToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
});
