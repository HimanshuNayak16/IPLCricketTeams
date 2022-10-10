import { setLocalStorage } from "./utils.js";

setLocalStorage();

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
