let scoreDauphins = [44, 23, 71];
let scoreKoalas = [65, 54, 49];

function calculAverageScore(score) {
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }
  return total / score.length;
}
function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= averageKoalas * 2) {
    console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
  } else if (averageKoalas >= averageDolphins * 2) {
    console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

let averageDolphins = calculAverageScore(scoreDauphins);
let averageKoalas = calculAverageScore(scoreKoalas);
checkWinner(averageDolphins, averageKoalas);

let scoreDauphins2 = [85, 54, 41];
let scoreKoalas2 = [23, 34, 27];
averageDolphins = calculAverageScore(scoreDauphins2);
averageKoalas = calculAverageScore(scoreKoalas2);

checkWinner(averageDolphins, averageKoalas);
