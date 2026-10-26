export function initTheme() { const s = localStorage.getItem("gj-theme"); const d = s ? s === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", d); return d; }
export function setTheme(d: boolean) { localStorage.setItem("gj-theme", d ? "dark" : "light"); document.documentElement.classList.toggle("dark", d); }
