/*Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название 
соответствующего времени года ("зима", "весна" и т.д.).  */

let month = parseInt(prompt("Введите номер месяца от 1 до 12:"));
let m2;
if (1 <= month && month <= 12) {
    if (month === 1) {
        m2 = "январь";
    } else if (month === 2) {
            m2 = "февраль";
    } else if (month === 3) {
            m2 = "март";
    } else if (month === 3) {
            m2 = "апрель";
    } else if (month === 5) {
            m2 = "май";
    } else if (month === 6) {
            m2 = "июнь";
    } else if (month === 7) {
            m2 = "июль";
    } else if (month === 8) {
            m2 = "август";
    } else if (month === 9) {
            m2 = "сентябрь";
    } else if (month === 10) {
            m2 = "октябрь";
    } else if (month === 11) {
            m2 = "ноябрь";
    } else if (month === 12) {
            m2 = "декабрь";
    }
    console.log("Значению " + month + " соответствует месяц " + m2);
}   else {
console.log("Вы неправы")
}

________________________________________________________________________________________________________
/*Единицы длины пронумерованы следующим образом: 
    1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
    Дан номер единицы длины и длина отрезка L в этих единицах (вещественное 
    число). Вывести длину данного отрезка в метрах. */
console.log("Задание 2:");

let multiply = parseInt(prompt("Выберите конвертацию в метры из величины в: 1 -- дециметрах, 2 -- километрах, 3 -- метрах, 4 -- миллиметрах, 5 -- сантиметрах:"));


if (multiply >= 1 && multiply <= 5) {
    let lenght = parseFloat(prompt("Введите величину отрезка в той размерности, которую Вы выбрали на прошлом шаге"));
    let result;

    if (multiply === 1) {
        result = lenght / 10;
    } else if (multiply === 2) {
        result = lenght * 1000;
    } else if (multiply === 3) {
        result = lenght * 1;
    } else if (multiply === 4) {
        result = lenght / 1000;
    } else if (multiply === 5) {
        result = lenght / 100;
    } 
    alert(result + " метра(ов)");
}
else {
    alert("Вы попытались ввести число за диапазоном от 1 до 5. Перезагрузитесь и попробуйте попасть в диапазон.");
}

________________________________________________________________________________________________________
// Дано целое число, лежащее в диапазоне от -999 до 999. Вывести строку - словесное описание данного числа вида 
// "отрицательное двузначное число", "нулевое число", "положительное однозначное число" и т.д.

console.log("Задание 3:");
let number = parseInt(prompt("Введите целое число от -999 до 999: "));
let pos_or_not = (number > 0 ) ? "положительное":
    (number < 0) ? "отрицательное":
    (number === 0) ? "не положительное и не отрицательное " : "Хьюстон, у нас проблемы!";



if (number > -1000 && number < 1000) {
    if (Math.abs(number) <= 999 && Math.abs(number) >= 100) {
        number = "трехзначное"; 
    } else if (Math.abs(number) <= 99 && Math.abs(number) >= 10) {
        number = "двузначное"; 
    } else if (Math.abs(number) <= 9 && Math.abs(number) >= 0) {
        number = "одноразрядное";
    }
    alert("Вы ввели " + pos_or_not + " " + number + " число")
} else {
    alert("Вы ввели число, находящееся за пределами работы нашей программы.");
}

________________________________________________________________________________________________________
// Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
// Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
// а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
// Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
console.log("Задание 4:");

let counter = 1;
let display ;
while (counter < 101) {
    display = counter;
    switch (counter % 3 === 0 && counter % 5 === 0) {
        display = "ThreeFive";
    }
    else if (counter % 3 === 0) {
        display = "Three";
    } else if (counter % 5 === 0) {
        display = "Five";
    }    
    console.log(display);    
    counter++;
}





/*


let x1 = parseInt(prompt('Введите координату x 1 точки')); //point a
let y1 = parseInt(prompt('Введите координату y 1 точки'));
let z1 = parseInt(prompt('Введите координату z 1 точки'));
let x2 = parseInt(prompt('Введите координату x 2 точки')); //point b
let y2 = parseInt(prompt('Введите координату y 2 точки'));
let z2 = parseInt(prompt('Введите координату z 2 точки'));
let x3 = parseInt(prompt('Введите координату x 3 точки')); // point c
let y3 = parseInt(prompt('Введите координату y 3 точки'));
let z3 = parseInt(prompt('Введите координату z 3 точки'));


let AB = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
console.log('Длина вектора AB' + AB);  
let BC = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2) + Math.pow((z3 - z2), 2));
console.log('Длина вектора BC' + BC); 
let CA = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2) + Math.pow((z3 - z1), 2));
console.log('Длина вектора CA' + CA);  

let result;

if          (Math.pow(AB, 2) === Math.pow(BC, 2) + Math.pow(CA, 2)) {
    result = "прямоугольный";
}   else if (Math.pow(BC, 2) === Math.pow(AB, 2) + Math.pow(CA, 2)) {
    result = "прямоугольный";
}   else if (Math.pow(CA, 2) === Math.pow(AB, 2) + Math.pow(BC, 2)) {
    result = "прямоугольный";
}   else {
    result = "НЕпрямоугольный";
}
console.log(result);

*/