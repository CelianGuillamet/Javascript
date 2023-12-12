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

let bernard = {
  name: "Bernard",
  weight: 78,
  height: 1.69,
  imc: calculIMC(78, 1.69),
  cat: catIMC(calculIMC(78, 1.69)),
};

let marcel = {
  name: "Marcel",
  weight: 92,
  height: 1.95,
  imc: calculIMC(92, 1.95),
  cat: catIMC(calculIMC(92, 1.95)),
};

if (bernard.imc > marcel.imc) {
  console.log(
    `Données 1 : Bernard a un IMC (${bernard.imc.toFixed(
      1
    )}) plus élevé que Marcel (${marcel.imc.toFixed(1)})`
  );
} else if (marcel.imc > bernard.imc) {
  console.log(
    `Données 1 : Marcel a un IMC (${marcel.imc.toFixed(
      1
    )}) plus élevé que Bernard (${bernard.imc.toFixed(1)})`
  );
}

// Données 2
let bernard2 = {
  name: "Bernard",
  weight: 95,
  height: 1.88,
  imc: calculIMC(95, 1.88),
  cat: catIMC(calculIMC(95, 1.88)),
};

let marcel2 = {
  name: "Marcel",
  weight: 85,
  height: 1.76,
  imc: calculIMC(85, 1.76),
  cat: catIMC(calculIMC(85, 1.76)),
};

if (bernard2.imc > marcel2.imc) {
  console.log(
    `Données 2 : Bernard a un IMC (${bernard2.imc.toFixed(
      1
    )}) plus élevé que Marcel (${marcel2.imc.toFixed(1)})`
  );
} else if (marcel2.imc > bernard2.imc) {
  console.log(
    `Données 2 : Marcel a un IMC (${marcel2.imc.toFixed(
      1
    )}) plus élevé que Bernard (${bernard2.imc.toFixed(1)})`
  );
}
