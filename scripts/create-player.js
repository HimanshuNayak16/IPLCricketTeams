import { setLocalStorage } from "./utils.js";

setLocalStorage();

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
