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
  createNewPlayer();
};

window.addEventListener("load", function () {
  __init__();
});

window.addEventListener("resize", function () {
  onResizeWindow();
});

const createNewPlayer = () => {
  const obj = {};
  new URLSearchParams(window.location.search).forEach((value, name) => {
    obj[name] = value;
  });

  if (Object.keys(obj).length > 0) {
    const players = JSON.parse(localStorage.getItem("players"));
    const playerObj = {
      id: Object.keys(obj).length + 1,
      playerName: obj.playername,
      from: obj.playerteam,
      price: String(obj.playerprice) + " Cr",
      isPlaying: false,
      playerImgUrl: obj.playerimage,
      description: obj.playerrole,
    };
    players.push(playerObj);
    localStorage.setItem("players", JSON.stringify(players));
  }
};
