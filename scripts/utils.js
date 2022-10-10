import { teams } from "./../data/teams.js";
import { players } from "./../data/players.js";

const setLocalStorage = () => {
  if (!localStorage.getItem("teams")) {
    localStorage.setItem("teams", JSON.stringify(teams));
  }
  if (!localStorage.getItem("players")) {
    localStorage.setItem("players", JSON.stringify(players));
  }
};

export { setLocalStorage };
