const v = (n) => `var(--${n})`;
export default { darkMode: "class", content: ["./index.html", "./src/**/*.tsx"],
 theme: { extend: { fontFamily: { sans: ["Inter", "system-ui", "Segoe UI", "sans-serif"], urdu: ["Noto Nastaliq Urdu", "serif"] },
  colors: { page: v("page"), card: v("card"), raised: v("raised"), ink: v("ink"), mute: v("mute"), line: v("line"), brand: v("brand"), navy: "#172554", teal2: v("teal"), link: v("link"), softind: v("softind"), softteal: v("softteal"), ok: v("ok"), okbg: v("okbg"), err: v("err"), errbg: v("errbg"), warn: v("warn"), warnbg: v("warnbg") } } } };
