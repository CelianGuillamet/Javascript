function tipCalculator(bill) {
  bill > 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(tipCalculator(bills[i]));
  total.push(bills[i] + tips[i]);
}

for (let i = 0; i < bills.length; i++) {
  console.log(
    `la note est de ${bills[i]} et le pourboire est de ${tips[i]} et le total est de ${total[i]}`
  );
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}

console.log(calcAverage(total));