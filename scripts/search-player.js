const searchTeamPlayer = document.getElementById("search-team-player-input");
const searchResultsDiv = document.getElementById("search-results");
let allPlayers = JSON.parse(localStorage.getItem("players"));

const addEventListenerToSearchBar = () => {
  searchTeamPlayer.addEventListener("input", (event) => {
    searchResultsDiv.innerHTML = "";
    if (event.target.value != "") {
      const playersFound = allPlayers.filter((player) =>
        player.from.startsWith(event.target.value.toUpperCase())
      );
      const playerCardWrapper = document.createElement("div");
      playerCardWrapper.className = "search-player-card-wrapper";

      playersFound.forEach((player) => {
        const playerCard = document.createElement("div");
        playerCard.className = "search-player-card";

        const playerProfilePic = document.createElement("img");
        playerProfilePic.setAttribute("src", player.playerImgUrl);
        playerProfilePic.style = "width: 64px; height: 64px";
        playerCard.appendChild(playerProfilePic);

        const playerNameEle = document.createElement("p");
        playerNameEle.innerText = player.playerName;
        playerCard.appendChild(playerNameEle);

        playerCardWrapper.appendChild(playerCard);
      });
      searchResultsDiv.appendChild(playerCardWrapper);
    }
  });
};
export { addEventListenerToSearchBar };
