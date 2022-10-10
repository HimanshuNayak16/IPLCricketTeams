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
    teamLogoUrl: obj.teamlogo,
    winnersInYear: [],
  };
  teams.push(teamObj);
  localStorage.setItem("teams", JSON.stringify(teams));
}
