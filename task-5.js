let cost;
const input = prompt('Введите страну для отправки товара:');
if (input === null) {
  alert('Отмена ввода ');
}
const inputNormalize = input.toLowerCase();

switch (inputNormalize) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

const message = `Доставка в ${inputNormalize} будет стоить ${cost} кредитов.`;
console.log(message);
