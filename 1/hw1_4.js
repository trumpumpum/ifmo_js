//Четвёртая задача
//4. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. 
//Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let m = parseFloat(prompt ("Введите первое число"));
let n = parseFloat(prompt ("Введите второе число"));
m = m - 10;
n = n - 10;
let compare = (Math.abs(m) <= Math.abs(n)) ? console.log(m + 10) : console.log(n + 10);


