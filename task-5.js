let price;
let country = prompt('Введите страну для отправки товара:');

if (country !== null) {
  country = country.toLowerCase();
}

switch (country) {
  case 'китай':
    price = 100;
    break;

  case 'чили':
    price = 250;
    break;

  case 'австралия':
    price = 170;
    break;

  case 'индия':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    break;
}

if (country === null) {
  alert('Пользеватель отменил ввод');
} else if (price === undefined) {
  console.log('В вашей стране доставка не доступна');
} else {
  const message = `Доставка в ${country} будет стоить ${price} кредитов`;
  console.log(message);
}
