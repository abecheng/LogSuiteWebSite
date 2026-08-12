(function () {
  const root = document.documentElement;
  const langButtons = document.querySelectorAll("[data-set-lang]");
  const providerButtons = document.querySelectorAll("[data-provider]");
  const panels = {
    gemini: document.getElementById("panel-gemini"),
    openrouter: document.getElementById("panel-openrouter"),
  };

  function setLang(lang) {
    root.dataset.lang = lang;
    langButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
    });
    try {
      localStorage.setItem("scribelog-api-key-lang", lang);
    } catch (_) {}
  }

  function setProvider(id) {
    Object.entries(panels).forEach(([key, el]) => {
      if (!el) return;
      el.hidden = key !== id;
    });
    providerButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.provider === id));
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.setLang));
  });

  providerButtons.forEach((btn) => {
    btn.addEventListener("click", () => setProvider(btn.dataset.provider));
  });

  let saved = "en";
  try {
    saved = localStorage.getItem("scribelog-api-key-lang") || saved;
  } catch (_) {}
  if (navigator.language && navigator.language.toLowerCase().startsWith("zh") && !localStorage.getItem("scribelog-api-key-lang")) {
    saved = "zh";
  }
  setLang(saved === "zh" ? "zh" : "en");
  setProvider("gemini");

  document.querySelectorAll(".shot img, .brand__logo").forEach((img) => {
    const markMissing = () => {
      img.classList.add("is-missing");
      img.closest(".shot")?.classList.add("is-missing");
    };
    img.addEventListener("error", markMissing);
    if (img.complete && img.naturalWidth === 0) markMissing();
  });
})();
