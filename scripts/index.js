import { setLocalStorage } from "./utils.js";
const teamCardsContainer = document.getElementById("team-card-container");

setLocalStorage();
let allTeams = JSON.parse(localStorage.getItem("teams"));

const createTeamCard = (team) => {
  const {
    teamId,
    teamName,
    homeGround,
    teamJerseyColor,
    teamLogoUrl,
    winnersInYear,
  } = team;

  const teamCard = document.createElement("a");
  teamCard.setAttribute("href", `./../pages/team.html?team_id=${teamId}`);
  teamCard.classList.add("team-card");
  teamCard.style = `background: linear-gradient(180deg, ${teamJerseyColor[0]} 0%,  ${teamJerseyColor[1]} 100%);border: 2px solid ${teamJerseyColor[1]}; `;

  const teamImg = document.createElement("img");
  teamImg.classList.add("team-img");
  teamImg.setAttribute("src", teamLogoUrl);
  teamCard.appendChild(teamImg);

  const teamNameEle = document.createElement("h2");
  teamNameEle.innerText = teamName;
  teamNameEle.classList.add("team-name");
  teamCard.appendChild(teamNameEle);

  const homeGroundEle = document.createElement("p");
  homeGroundEle.innerText = homeGround;
  homeGroundEle.classList.add("team-ground");
  teamCard.appendChild(homeGroundEle);

  if (winnersInYear.length > 0) {
    const winnersEle = document.createElement("div");
    winnersEle.classList.add("winners");
    const trophyImg = document.createElement("img");
    trophyImg.setAttribute(
      "src",
      "https://www.iplt20.com/assets/images/vishal/ico-trophy.png"
    );
    trophyImg.style = "width: 20px; height: 20px;";
    winnersEle.appendChild(trophyImg);

    const winnerText = document.createElement("p");
    winnerText.innerText = winnersInYear.toString();
    winnersEle.appendChild(winnerText);

    teamCard.appendChild(winnersEle);
  }

  return teamCard;
};

const renderTeamCards = () => {
  for (const team of allTeams) {
    const teamCard = createTeamCard(team);
    teamCardsContainer.appendChild(teamCard);
  }
};

renderTeamCards();

export { setLocalStorage };
