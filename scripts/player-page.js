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
  playerTeamOptionsFunctionality();
};

window.addEventListener("load", function () {
  __init__();
});

window.addEventListener("resize", function () {
  onResizeWindow();
});

const playerTeamOptionsFunctionality = () => {
  const allTeamNames = JSON.parse(localStorage.getItem("teams")).map(
    (team) => team.teamId
  );
  const playerTeamSelect = document.getElementById("playerteam");

  allTeamNames.forEach((teamName) => {
    const optionEle = document.createElement("option");
    optionEle.value = teamName;
    optionEle.innerText = teamName;
    playerTeamSelect.appendChild(optionEle);
  });
};
