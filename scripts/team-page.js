import { setLocalStorage } from "./utils/set-local-storage.js";
import { addEventListenerToSearchBar } from "./utils/search-player.js";
import {
  onResizeWindow,
  addHamburgerFunctionality,
} from "./utils/hamburger.js";

const __init__ = () => {
  setLocalStorage();
  addHamburgerFunctionality();
  addEventListenerToSearchBar();
};

window.addEventListener("load", function () {
  __init__();
});

window.addEventListener("resize", function () {
  onResizeWindow();
});
