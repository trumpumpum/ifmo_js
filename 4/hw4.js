// 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
console.log('hw4_1');
let num = prompt('Введите целое число, а мы выведем Вам сумму цифр, из  которых состоит данное число:');
console.log(typeof(num));
let numArr = num.split('');
console.log(typeof(numArr));
var sum = 0;
for (let i  = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
    sum = sum + +(numArr[i]);
}
console.log(sum);

// 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
console.log('hw4_2');
let str = prompt('Введите строку');
let symbol = prompt("Введите символ");
let regexp = new RegExp(symbol, 'ig');
let newString = str.replace(regexp, symbol + symbol);
console.log(`Оригинальная строка: ${str}
 Символ, по которому будет удвоение: ${symbol}
 Видоизменённая строка: ${newString}`);

 console.log('hw4_3');
 

// 3. Проверить что введенный пароль удовлетворяет 
// следующим условиям сложности:
// - длинна от 9 символов;
// - содержит обязательно английские буквы верхнего и нижнего регистра;
// - содержит более двух цифр;
// - содержит обязательно один из неалфавитных символов (например, !, $, #, %).

// 4** Нечёткий поиск:
// Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
// Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
// перепутанной буквой, например: "Срида". Написать программу, которая 
// позволяет с использованием регулярного выражения найти в строке-словаре 
// введённое пользователя слово (не смотря на одну ошибка в слове) и 
// вывести исправленное слово пользователю, например: "Среда". 