import { setLocalStorage } from "./utils.js";

const teamContainer = document.getElementById("team-container");
const playerContainer = document.getElementById("player-container");

// grab query string
const queryString = window.location.search; // ?product_id=${id}
// parse the query string’s parameters using URLSearchParams
const urlParams = new URLSearchParams(queryString);
//  URLSearchParams.get() will return the first value associated with the given search parameter
const teamId = urlParams.get("team_id");

setLocalStorage();
const teamDetails = JSON.parse(localStorage.getItem("teams")).filter(
  (team) => team.teamId == teamId
)[0];
const playerDetails = JSON.parse(localStorage.getItem("players")).filter(
  (player) => player.from == teamId
);

const teamLogoUrl = teamDetails.teamLogoUrl;

const teamBanner = document.createElement("div");
teamBanner.style = `background: linear-gradient(180deg, ${teamDetails.teamJerseyColor[0]} 0%,  ${teamDetails.teamJerseyColor[1]} 100%); width: 100%; padding: 108px 32px 32px; display: flex;align-items: center;`;
const teamLogo = document.createElement("img");
teamLogo.style = "width: 160px; height: 159px";
teamLogo.setAttribute("src", teamLogoUrl);
teamBanner.appendChild(teamLogo);

const teamDetailsDiv = document.createElement("div");
teamDetailsDiv.style =
  "padding-left: 32px; display: flex; flex-direction: column;flex-basis: min-content";
const teamName = document.createElement("h1");
teamName.style = `font-style: italic;color: #fff;`;
teamName.innerText = teamDetails.teamName;
teamDetailsDiv.appendChild(teamName);

if (teamDetails.winnersInYear.length > 0) {
  const winnersEle = document.createElement("div");
  winnersEle.classList.add("winners");
  winnersEle.style = "margin-top: 32px";
  const trophyImg = document.createElement("img");
  trophyImg.setAttribute(
    "src",
    "https://www.iplt20.com/assets/images/vishal/ico-trophy.png"
  );
  trophyImg.style = "width: 20px; height: 20px;";
  winnersEle.appendChild(trophyImg);

  const winnerText = document.createElement("p");
  winnerText.innerText = teamDetails.winnersInYear.toString();
  winnersEle.appendChild(winnerText);
  teamDetailsDiv.appendChild(winnersEle);
}

teamBanner.appendChild(teamDetailsDiv);

teamContainer.appendChild(teamBanner);

playerDetails.forEach((player) => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");
  playerCard.style = `background: linear-gradient(180deg, ${teamDetails.teamJerseyColor[0]} 0%,  ${teamDetails.teamJerseyColor[1]} 100%);border: 3px solid #becce2;; `;

  const playerImg = document.createElement("img");
  playerImg.classList.add("player-img");
  playerImg.setAttribute(
    "src",
    player.playerImgUrl ||
      "https://robohash.org/be-cheerful.png?set=set" + ((player.id % 5) + 1)
  );
  playerCard.appendChild(playerImg);

  const playerName = document.createElement("p");
  playerName.innerText = player.playerName;
  playerName.classList.add("player-name");
  playerCard.appendChild(playerName);

  const playerStats = document.createElement("div");
  playerStats.style =
    "display: flex;justify-content: space-around;width: 100%; padding-top: 8px;align-items: center;color: #fff;";
  const playerRole = document.createElement("p");
  playerRole.innerText = player.description;
  playerStats.appendChild(playerRole);

  const playerPrice = document.createElement("p");
  playerPrice.style = "font-size: 12px";
  const price = "INR " + (player.price.split(" ")[0] || 0.2) + " Crores";
  playerPrice.innerText = `Price: ` + price;
  playerStats.appendChild(playerPrice);

  playerCard.appendChild(playerStats);

  playerContainer.append(playerCard);
});
