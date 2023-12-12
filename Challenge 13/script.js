const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gk = game.players[0][0];
const fieldPlayers1 = game.players[0].slice(1);
const players1 = { gk, fieldPlayers: fieldPlayers1 };

const fieldPlayers2 = game.players[1].slice(1);
const players2 = { gk: game.players[1][0], fieldPlayers: fieldPlayers2 };

const players1Final = {
  gk: players1.gk,
  fieldPlayers: [...players1.fieldPlayers, "Thiago", "Coutinho", "Perisic"],
};

const allPlayers = [
  ...players1.fieldPlayers,
  players1.gk,
  ...players2.fieldPlayers,
  players2.gk,
];

console.log(allPlayers);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

function inArray(array, element) {
  return array.indexOf(element) !== -1;
}

const goalsCount = {};

function printGoals(...players) {
  for (const player of players) {
    const playerGoals = game.scored.filter(
      (scorer) => scorer === player
    ).length;

    if (playerGoals > 0) {
      goalsCount[player] = goalsCount[player]
        ? goalsCount[player] + playerGoals
        : playerGoals;
      console.log(
        `${player} is in the scored list and he scored ${goalsCount[player]} goals`
      );
    } else {
      console.log(`${player} is not in the scored list.`);
    }
  }
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich", "Gnarby");

function winProbability(team1, team2) {
  return team1 < team2 ? "team1" : "team2";
}

const winner = winProbability(team1, team2);
console.log(`Odd of victory ${game[winner]}: ${game.odds[winner]}`);

for (let i = 0; i < game.scored.length; i++) {
  const scorer = game.scored[i];
  console.log(`Goal ${i + 1}: ${scorer}`);
}

let totalOdds = 0;

for (let i = 0; i < Object.values(game.odds).length; i++) {
  totalOdds += Object.values(game.odds)[i];
}

let averageOdds = totalOdds / Object.values(game.odds).length;
console.log(averageOdds);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

console.log(scorers);

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

const events = new Set(gameEvents.map((event) => event[1]));
console.log(events);

gameEvents.splice(4, 1);
console.log(gameEvents);

const gameDuration = 90;

let timeBetweenEvents = [];

for (let i = 0; i < gameEvents.length - 1; i++) {
  timeBetweenEvents.push(gameEvents[i + 1][0] - gameEvents[i][0]);
}

console.log(timeBetweenEvents);

let totalTimeBetweenEvents = 0;

for (let i = 0; i < timeBetweenEvents.length; i++) {
  totalTimeBetweenEvents += timeBetweenEvents[i];
}

let averageTimeBetweenEvents =
  totalTimeBetweenEvents / timeBetweenEvents.length;
console.log(
  `Un évènement est apparu en moyenne toutes les  ${averageTimeBetweenEvents.toFixed(
    0
  )} minutes`
);

for (let i = 0; i < gameEvents.length; i++) {
  const event = gameEvents[i];
  const half = event[0] <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${event[0]}: ${event[1]}`);
}
