(function () {
  const root = document.documentElement;
  const langButtons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    root.dataset.lang = lang;
    langButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
    });
    try {
      localStorage.setItem("logsuite-lang", lang);
    } catch (_) {}
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.setLang));
  });

  let saved = "en";
  try {
    saved = localStorage.getItem("logsuite-lang") || saved;
  } catch (_) {}
  if (
    navigator.language &&
    navigator.language.toLowerCase().startsWith("zh") &&
    !localStorage.getItem("logsuite-lang")
  ) {
    saved = "zh";
  }
  setLang(saved === "zh" ? "zh" : "en");
})();
