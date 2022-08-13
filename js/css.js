
var theme = "";
function setIconTheme() {
    var icons = document.getElementsByClassName("icon");
    for(var i = 0; i < icons.length; i++) {
        icons[i].setAttribute("src", icons[i].getAttribute("href").replace("{}", theme));
    }
}
function setTheme(newtheme) {
    theme = newtheme;
    setIconTheme();
    document.documentElement.className = theme;
}
function initTheme() {
    setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
}
function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
}
