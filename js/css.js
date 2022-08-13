
function initDark() {
    if(window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.className = "dark";
        }
    }
}
function toggleDark() {
    document.documentElement.classList.toggle("dark");
}
