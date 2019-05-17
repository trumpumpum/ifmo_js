//Третья задача
//Из трех данных чисел выбрать наименьшее.

let first = prompt("Введите 1 число");
let second = prompt("Введите 2 число");
let third = prompt("Введите 3 число");
let compare_1 = (first <= second) ? compare_1 = first: compare_1 = second;
compare_1 = (compare_1 <= third)? compare_1 = compare_1: compare_1 = third;
alert(compare_1);
