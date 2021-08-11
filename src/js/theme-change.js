import { bodyRef, checkboxRef } from "./refs.js";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function onThemeChange() {
    bodyRef.classList.add(`${Theme.LIGHT}`);

    if (checkboxRef.checked) {
        bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
    } else {
        bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
        checkboxRef.removeAttribute("checked"); 
    };

    localStorage.setItem("theme", bodyRef.className);
}

export function saveTheme() {
    const theme = localStorage.getItem("theme");
    
    if (theme !== "") {
        bodyRef.className = theme;
    };

    if (theme === Theme.DARK) {
        checkboxRef.setAttribute("checked", true); 
    };
};
