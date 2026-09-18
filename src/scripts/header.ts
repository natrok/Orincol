// Header behaviour: scroll state, mega menu and mobile menu toggle.
// Loaded from Header.astro via `import "../scripts/header"`.

const header = document.getElementById("site-header");

const setScrolled = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setScrolled();
window.addEventListener("scroll", setScrolled, { passive: true });

// Mega menu open/close (click + hover + keyboard, closes on outside click / Escape).
const megaItems = document.querySelectorAll<HTMLLIElement>("[data-mega-item]");

megaItems.forEach((item) => {
  const toggle = item.querySelector<HTMLButtonElement>("[data-mega-toggle]");
  const panel = item.querySelector<HTMLElement>("[data-mega-panel]");
  if (!toggle) return;

  let closeTimeout: ReturnType<typeof setTimeout> | undefined;

  const open = () => {
    clearTimeout(closeTimeout);
    item.setAttribute("data-open", "true");
    toggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    item.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
  };

  const scheduleClose = () => {
    closeTimeout = setTimeout(close, 150);
  };

  toggle.addEventListener("click", () => {
    open();
  });

  item.addEventListener("mouseenter", open);
  item.addEventListener("mouseleave", scheduleClose);
  panel?.addEventListener("mouseenter", open);
  panel?.addEventListener("mouseleave", scheduleClose);

  item.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
      toggle.focus();
    }
  });
});

document.addEventListener("click", (event) => {
  megaItems.forEach((item) => {
    if (!item.contains(event.target as Node)) {
      item.setAttribute("data-open", "false");
      item.querySelector("[data-mega-toggle]")?.setAttribute("aria-expanded", "false");
    }
  });
});

// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

const closeMobileMenu = () => {
  mobileToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.setAttribute("data-open", "false");
  document.body.style.removeProperty("overflow");
};

const openMobileMenu = () => {
  mobileToggle?.setAttribute("aria-expanded", "true");
  mobileMenu?.setAttribute("data-open", "true");
  document.body.style.overflow = "hidden";
};

mobileToggle?.addEventListener("click", () => {
  const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMobileMenu() : openMobileMenu();
});

mobileMenu?.querySelector("[data-mobile-close]")?.addEventListener("click", closeMobileMenu);

mobileMenu?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    mobileToggle?.focus();
  }
});

document.addEventListener("astro:before-swap", closeMobileMenu);
