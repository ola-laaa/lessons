"use strict"
console.log("Відео Цикли FOR і WHILE");
console.log("За допомогою while:");
let num1 = 1;
while (num1 < 6) {
	console.log(num1);
	num1++;
}
console.log("За допомогою do while:");
let num2 = 1;
do {
	console.log(num2);
	num2++;
} while (num2 < 6)
console.log("За допомогою for");
for (let num3 = 1; num3 < 6; num3++) {
	console.log(num3);
}
console.log("Задача №3");
let num3 = 0;
while (num3 < 3) {
	console.log(`Число: ${num3}`);
	num3++;
}
console.log("Задача №4");
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break firstFor;
		}
	}
}
console.log("Відео Числа в JS");
console.log("Задача №1");
let numEpsilon = 1.005 + Number.EPSILON
let numOne = Math.round(numEpsilon * 100) / 100;
console.log(numOne);
console.log("Задача №2");
let value1 = "135.58px";
console.log(parseFloat(value1));
console.log("Задача №3");
let value2 = 58 + "Фрілансер";
if (isNaN(value2)) {
	console.log("Результат виразу NaN");
}
console.log("Задача №4");
console.log(Math.max(10, 58, 39, -150, 0));
console.log("Задача №5");
let number = 58.858;
console.log(Math.floor(number));
console.log("Рядки в JS");
console.log("Задача №2");
let text = "фрілансер";
console.log(text[5]);
console.log("Задача №4");
console.log(text.toUpperCase());
console.log("Задача №5");
console.log(text.slice(3, 6));