const credits = 23580;
const pricePerDroid = 3000;
let number = prompt('Сколько дроидов желаете купить:');
let firstMessage;
number = Number(number);
const totalPrice = pricePerDroid * number;
const balance = credits - totalPrice;

if (number === 0) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (Number.isNaN(number) === true) {
  alert('Некоректный ввод. Введите число!');
} else {
  firstMessage = `Вы купили ${number} дроидов, на счету осталось ${balance} кредитов.`;
  console.log(firstMessage);
}
