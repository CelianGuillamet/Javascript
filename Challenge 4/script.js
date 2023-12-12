let scoreDauphins = [96, 108, 89];
let scoreKoalas = [88, 91, 110];

function calculAverageScore(score) {
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }
  return total / score.length;
}
function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins < 100 || averageKoalas < 100) {
    console.log("No winner");
  } else if (averageDolphins > averageKoalas) {
    console.log("Dolphins win");
  } else if (averageDolphins < averageKoalas) {
    console.log("Koalas win");
  } else if (averageDolphins === averageKoalas) {
    console.log("Draw");
  }
}

let averageDolphins = calculAverageScore(scoreDauphins);
let averageKoalas = calculAverageScore(scoreKoalas);

checkWinner(averageDolphins, averageKoalas);

let scoreDauphins2 = [97, 112, 101];
let scoreKoalas2 = [109, 95, 123];
averageDolphins = calculAverageScore(scoreDauphins2);
averageKoalas = calculAverageScore(scoreKoalas2);

checkWinner(averageDolphins, averageKoalas);

let scoreDauphins3 = [97, 112, 101];
let scoreKoalas3 = [109, 95, 106];
averageDolphins = calculAverageScore(scoreDauphins3);
averageKoalas = calculAverageScore(scoreKoalas3);

checkWinner(averageDolphins, averageKoalas);
