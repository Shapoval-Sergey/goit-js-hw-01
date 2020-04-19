const total = 100;
const ordered = 130;

// Тернарный оператор:
const result =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(result);

// 2-й вариант выполнения задачи:
// if (ordered > total) {
//   console.log('На складе недостаточно товаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }
