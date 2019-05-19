//Третья задача
//Из трех данных чисел выбрать наименьшее.

let first = parseInt(prompt("Введите 1 число"));
let second = parseInt(prompt("Введите 2 число"));
let third = parseInt(prompt("Введите 3 число"));



let compare_1 = (first <= second) ? first :  second;
let compare_2 = (compare_1 <= third) ? compare_1 : third;
alert(compare_2);