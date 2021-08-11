import "./css/styles.css";
import foodServiceMenu from "./menu.json";
import menuItemsTemplate from "./templates/menu-item.hbs";
import { menuRef, checkboxRef } from "./js/refs.js";
import { onThemeChange, saveTheme } from "./js/theme-change.js";

const menuItemMarkup = menuItemsTemplate(foodServiceMenu);

menuRef.insertAdjacentHTML("beforeend", menuItemMarkup);

checkboxRef.addEventListener("change", onThemeChange);

// saveTheme();
