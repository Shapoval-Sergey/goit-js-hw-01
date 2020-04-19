const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt('Сколько дроидов желаете купить:');
let totalPrice;

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * Number(numberOfDroids);
}
console.log('Итоговая сумма: ', totalPrice);

let balance;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  balance = credits - totalPrice;
}
console.log('Баланс на счету пользевателя: ', balance);
