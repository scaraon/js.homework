"use stricst";
const total = 100;
const ordered = 50;

if (total > ordered) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}

const password = prompt("Введите пароль:");
const ADMIN_PASSWORD = "jqueryismyjam";

if (password == null) {
  alert("Отменено пользователем!");
} else if (password === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}

const credits = 23580;
const pricePerDroid = 3000;
const price = prompt("Введите количество дроидов которые хотите купить");
const totalPrice = pricePerDroid * price;
const sum = credits - totalPrice;

if (price == null) {
  alert("Отменено пользователем!");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else if (totalPrice <= credits) {
  alert(`Вы купили ${price} дроидов, на счету осталось ${sum} кредитов.`);
}
