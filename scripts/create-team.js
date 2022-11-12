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
  createNewTeam();
};

window.addEventListener("load", function () {
  __init__();
});

window.addEventListener("resize", function () {
  onResizeWindow();
});

const createNewTeam = () => {
  const obj = {};
  new URLSearchParams(window.location.search).forEach((value, name) => {
    obj[name] = value;
  });

  if (Object.keys(obj).length > 0) {
    const teams = JSON.parse(localStorage.getItem("teams"));
    const teamObj = {
      teamId: obj.teamAbbreviation,
      teamName: obj.teamname,
      homeGround: obj.homeground,
      teamJerseyColor: [obj.primarycolor, obj.secondarycolor],
      teamLogoUrl:
        obj.teamlogo ||
        "https://img.pikbest.com/png-images/20210409/creative-cricket-logo-vector-template_5837407.png!bw340",
      winnersInYear: [],
    };
    teams.push(teamObj);
    localStorage.setItem("teams", JSON.stringify(teams));
  }
};
