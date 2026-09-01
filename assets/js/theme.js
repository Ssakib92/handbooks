function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    const button = document.getElementById("theme-toggle");

    if (button) {

        button.textContent = theme === "dark" ? "☀️" : "🌙";

    }

}

function toggleTheme() {

    const current = document.documentElement.getAttribute("data-theme");

    applyTheme(current === "dark" ? "light" : "dark");

}

document.addEventListener("DOMContentLoaded", () => {

    const saved = localStorage.getItem("theme") || "dark";

    applyTheme(saved);

    const button = document.getElementById("theme-toggle");

    if (button) {

        button.addEventListener("click", toggleTheme);

    }

});