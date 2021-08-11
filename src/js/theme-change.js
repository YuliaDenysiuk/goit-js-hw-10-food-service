import { bodyRef, checkboxRef } from "./refs.js";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// bodyRef.classList.add(`${Theme.LIGHT}`);
 
export function onThemeChange(e) {
    if (e.currentTarget.checked) {
        bodyRef.classList.add(`${Theme.DARK}`);
        bodyRef.classList.remove(`${Theme.LIGHT}`);
    } else {
        bodyRef.classList.remove(`${Theme.DARK}`);
        bodyRef.classList.add(`${Theme.LIGHT}`);
        checkboxRef.removeAttribute("checked"); 
    };

    localStorage.setItem("theme", bodyRef.className);
}

export function saveTheme() {
    let theme = localStorage.getItem("theme");
    bodyRef.className = theme;

    if (theme === Theme.DARK) {
        checkboxRef.setAttribute("checked", true); 
    };
};
