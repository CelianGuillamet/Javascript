function calculIMC(weight, height) {
  return weight / (height * height);
}

function catIMC(imc) {
  if (imc < 20) {
    return "Insuffisance pondérale";
  } else if (imc < 25) {
    return "Poids normal";
  } else if (imc < 30) {
    return "surpoids";
  } else {
    return "obèse";
  }
}

// Données 1
let weightBernard1 = 78;
let heightBernard1 = 1.69;

let weightMarcel1 = 92;
let heightMarcel1 = 1.95;

// Calcul de l'IMC
let imcBernard1 = calculIMC(weightBernard1, heightBernard1);
let imcMarcel1 = calculIMC(weightMarcel1, heightMarcel1);

// Comparaison des IMC
if (imcBernard1 > imcMarcel1) {
  console.log(
    `Données 1 : Bernard a un IMC (${imcBernard1.toFixed(
      1
    )}) plus élevé que Marcel (${imcMarcel1.toFixed(1)})`
  );
} else {
  console.log(
    `Données 1 : Marcel a un IMC (${imcMarcel1.toFixed(
      1
    )}) plus élevé que Bernard (${imcBernard1.toFixed(1)})`
  );
}

console.log(`Données 1 : Bernard est ${catIMC(imcBernard1)}`);
console.log(`Données 1 : Marcel est ${catIMC(imcMarcel1)}`);

// Données 2
let weightBernard2 = 95;
let heightBernard2 = 1.88;

let weightMarcel2 = 85;
let heightMarcel2 = 1.76;

let imcBernard2 = calculIMC(weightBernard2, heightBernard2);
let imcMarcel2 = calculIMC(weightMarcel2, heightMarcel2);

if (imcBernard2 > imcMarcel2) {
  console.log(
    `Données 2 : Bernard a un IMC (${imcBernard2.toFixed(
      1
    )}) plus élevé que Marcel (${imcMarcel2.toFixed(1)})`
  );
} else {
  console.log(
    `Données 2 : Marcel a un IMC (${imcMarcel2.toFixed(
      1
    )}) plus élevé que Bernard (${imcBernard2.toFixed(1)})`
  );
}

console.log(`Données 2 : Bernard est ${catIMC(imcBernard2)}`);
console.log(`Données 2 : Marcel est ${catIMC(imcMarcel2)}`);

