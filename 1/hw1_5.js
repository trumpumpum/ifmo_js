//Первая задача
//1. На садовом участке площадью 10 соток, разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?

let backyard_square = 10*100;
let garden_bed = 15*25;
let quantity_of_gardens_bed = backyard_square/garden_bed;
quantity_of_gardens_bed = parseInt(quantity_of_gardens_bed);
console.log("Число помещённых участков:");
console.log(quantity_of_gardens_bed);
let result = backyard_square - quantity_of_gardens_bed * garden_bed;
console.log("Число свободных квадратных метров:");
console.log(result);



//Вторая задача:
//2. Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.


let big_ellipse = 15*100;
let small_ellipse = 600;
let result = big_ellipse - small_ellipse;
console.log(result);


//Третья задача
//Из трех данных чисел выбрать наименьшее.

let first = prompt("Введите 1 число");
let second = prompt("Введите 2 число");
let third = prompt("Введите 3 число");
let compare_1 = (first <= second) ? compare_1 = first: compare_1 = second;
compare_1 = (compare_1 <= third)? compare_1 = compare_1: compare_1 = third;
alert(compare_1);





//Четвёртая задача
//4. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. 
//Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let m = prompt ("Введите первое число");
let n = prompt ("Введите второе число");
m = m - 10;
n = n - 10;
let compare = (m <= n) ? console.log(m+10) : console.log(n+10);






// Введите координаты первой точки последовательно (x, y, z)
// Введите координаты второй точки последовательно (x, y, z)
// Введите координаты третьей точки последовательно (x, y, z)








// console.log("Hello world");

// // Одностраничные комменты

// /*
// *Многострангичный коммент
// *
// */


// //Объявление переменных
// // var-- старый вариант, let -- новый с 2015 года. Отличаются областью видимости.
// var login;
// let pwd;
// //Константы. Их принято называть с большой буквы. Ибо при встрече 
// //другого разработчика, он то, что большими буквами, скорее всего не станет менять 
// const CONST_VALUE = 123;


// // Присвоим переменным значения
// login = "qwe";
// pwd = "1234";

// console.log(login); //Выведет qwe
// //Переопределить значение
// load = "asd";
// pwd = "556";

// login = 123;
// console.log (login); // выведет 123 rfr xbckj/

// console.log (typeof login);
// //let height width;
// let height = 123, width = 346;

// [1,2].forEach(alert);
// // обхявление переменных -- говорим что будет, определение -- выделяем память, инициализация -- и то и то.


// //в CSS был kebab style. Че-то там нанизывается, посмотреть


// // Верблюжий стиль объявления тут
// let camelCase;

// //змеиное тело
// let snake_case;

// //Типы данных 
// // Число -- тип number
// height = 28.3;
// width = 789;

// //Строки. Какими кавычками начали, такими и закончили. Могу в одни кавычки засунуть другие кавычки, и браузер их выведет
// let str = "Строка";
// let str1 = 'Строка 2';
// let str2 = "'Строка 2'"; //Или наоборот

// //let str = ""Строка \"2"; //Или наоборот. Тут срабатывает экранирование, которое позволяет браузеру сказать что та кавычка не конец строки

// //Логический тип
// let active = true;
// passive = false;

// console.log(active, passive);


// //Значение null. Очищение переменной, например
// let unknowValue = null;
// console.log(unknowValue);

// //Значение undefined. "Я пользуюсь тем, что нету". Или я пользуюсь тем, переменную которую я не задал в имени
// let undefinedValue;
// console.log(undefinedValue);

// //Преобразование типов
// let age = "13.5 лет";
// age = parseInt(age);
// console.log(age);

// height = "фывфы300.67px";
// height = parseFloat(height);
// console.log(height);

// //NaN -- not a number. Не число. Но при том typeof NaN -- число

// //ВСЕ ЧТО ВВОДИТ ПОЛЬЗОВАТЕЛЬ В input-- СТРОКА, кроме намбер вроде


// //Арифметические операции
// // + - * / % 
// // % - Остаток от деления
// // ** - возведение в степень
// height = 45;
// height = height % 2;
// console.log(height); // - Этой штукой легко проверять четность числа. Таблица зеброй, например, разукрасичть -- четная строка или нет

// console.log(3 + 5); //  = 8
// console.log('3' + 5); //  = '35' как строка. Когда 1 из операторов строка, он второе число превращает в строку и коактезирует
// console.log(+'3' + 5); //  = ПОНЯТЬ КАК РАБОТАЕТю ПОлучится 8
// console.log('строка' + "ещё строка"); //'строкаещё строка'
// console.log('3'+ 5); //15
// console.log('str' / 5); //NAN

// console.log(isNaN("str")); //true  -- IsNan проверяется не является ли это не числом
// console.log(isNaN("23")); //false
// console.log(isNaN("23er")); //true
// console.log(isNaN(true)); //false -- тру преобразует в число, т.е. 0, а это число

// console.log(isNaN(34/0)); //Infinity
// console.log(isNaN(-34/0)); //Infinity
// console.log(isNaN(Infinity/Infinity)); //NaN
// //console.log(isNaN(isFinite(5)); //  true
// console.log(isNaN(0,1+0,2)); //Степень Мантиссы вроде отвечает за хвостик 4 = 0.3000000004 



// console.log(Number.MAX_VALUE); //Можно узнать макс. мин. точность. 64-битное число. У него обрезается точность там, где 10 в степени начинается. ПОэтому safe есть

// сonsole.log(Number.MAX_SAFE_INTEGER); //
// сonsole.log(Number.MIN_SAFE_INTEGER);


// //Оператор присваивание

// let a = 12;
// a = a + 10;
// a += 10; //Сокращение записи. 


// let c = 12;
// c = c % 10;
// c %= 10; 

// //операторы сравнения
// // > < >= <= 
// // == (равенство)  != (неравенство)
// // === (строгое равенство)  !== (строгое неравенство);

// height = 123;
// width = '123';
// let num = 500;
// login = "asd";
// login2 = 'France';

// console.log(height > width); //false
// console.log(height >= width); //true

// console.log(height > login2); //Вроде он будет сравнивать по кодировке -- false, т.кю А раньше f
// console.log(height == width); //true. Пофиг что число и строка
// console.log(height === width); //false, ибо разные типы данных

// //Инкремент и декремент
// num = 2;
// console.log(++num);  // Сначала увеличит, а потом вернет в консоль результат
// console.log(num++); // Cначала выведет, а потом прирастит

// num = 3;
// num = num++;
// console.log(num); //3


// //Унарные операторы, бинарные и еще тернарный

// // (условие)? значение1: значение2;

// /*
// проверяет условие, и ему интересно чем разрешится условие. Если true, то вернётся первое значение,
// иначе -- значение 2.

// */

// let res = (height >= parseInt(width))? 
//     "Высота больше или равна":
//     "Ширина больше";

// console.log(res);


// let data = prompt("Введите данные", "Placeholder");


// // Задача 

// let answer = prompt ("Проверьте свой возраст", "123");
// let age2 = parseInt(answer);
// let result = (age2 >= 18) ? "Добро пожаловать": "Прости, подрасти";
// alert(result);

// //

// let login3 = prompt("Input login");
// (login3 === "admin" & {
//         let pass = prompt ("Введите пароль");
//         (pass === "pass") & {
//             alert ("Добро подаловать") : 
//             alert ("Пшел вон");
//         }  : alert ("Пшел вон");