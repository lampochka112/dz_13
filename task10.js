const number = parseInt(prompt("Введите целое число: "), 10);
const isEven = (number % 2 === 0);
const result = isEven ? "Четное число" : "Нечетное число";
console.log(result);
