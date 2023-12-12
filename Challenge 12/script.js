let temps1 = [17, 21, 23];
let temps2 = [12, 5, -5, 0, 4];

function showPredi(temps) {
  for (let i = 0; i < temps.length; i++) {
    let days = i + 1 === 1 ? "jour" : "jours";
    console.log(`${temps[i]} degrés dans ${i + 1} ${days}`);
  }
}

showPredi(temps1);
showPredi(temps2);
