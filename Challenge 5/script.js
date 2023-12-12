function tipCalculator(bill) {
  bill > 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
}

let bills = [275, 40, 430];
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
