let isSideBarOpen = false;

const addHamburgerFunctionality = () => {
  isSideBarOpen = false;
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeSideBar = document.getElementsByClassName("close-sidebar")[0];
  const mobileSideBar = document.getElementById("mobileSideBarDiv");
  mobileSideBar.style.opacity = "0";
  mobileSideBar.style.display = "none";
  hamburgerIcon.addEventListener("click", () => {
    isSideBarOpen = !isSideBarOpen;
    if (isSideBarOpen) {
      mobileSideBar.style.display = "block";
      mobileSideBar.style.opacity = "1";
      hamburgerIcon.style.display = "none";
    } else {
      mobileSideBar.style.opacity = "0";
      mobileSideBar.style.display = "none";
      hamburgerIcon.style.display = "flex";
    }
  });
  closeSideBar.addEventListener("click", () => {
    isSideBarOpen = false;
    mobileSideBar.style.opacity = "0";
    mobileSideBar.style.display = "none";
    hamburgerIcon.style.display = "flex";
    const searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = "";
    const searchTeamPlayerClasses = document.getElementsByClassName(
      "search-team-player-input"
    );
    Array.from(searchTeamPlayerClasses).forEach(
      (searchTeamPlayer) => (searchTeamPlayer.value = "")
    );
  });
};

const onResizeWindow = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileSideBar = document.getElementById("mobileSideBarDiv");
  const searchTeamPlayerInput = document.getElementsByClassName(
    "search-team-player-input"
  )[0];

  if (width > 950) {
    if (isSideBarOpen) isSideBarOpen = false;
  }
  if (searchTeamPlayerInput.value != "" && width <= 950) isSideBarOpen = true;

  if (isSideBarOpen) {
    mobileSideBar.style.display = "block";
    mobileSideBar.style.opacity = "1";
    hamburgerIcon.style.display = "none";
  } else {
    mobileSideBar.style.opacity = "0";
    mobileSideBar.style.display = "none";
    hamburgerIcon.style.display = "flex";
  }
};

export { addHamburgerFunctionality, onResizeWindow };
