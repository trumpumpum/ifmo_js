/*let x1, y1, z1, 
    x2, y2, z2,  
    x3, y3, z3;*/

/*Трёхмерное пространство:
Есть три вершины a, b и с. У каждой 
вершина заданы координатами x, y, z как 
целые числа. Нужно определить - является 
ли треугольник с заданными координатами 
прямоугольным. */

let x1 = parseInt(prompt('Введите координату x 1 точки')); //point a
let y1 = parseInt(prompt('Введите координату y 1 точки'));
let z1 = parseInt(prompt('Введите координату z 1 точки'));
let x2 = parseInt(prompt('Введите координату x 2 точки')); //point b
let y2 = parseInt(prompt('Введите координату y 2 точки'));
let z2 = parseInt(prompt('Введите координату z 2 точки'));
let x3 = parseInt(prompt('Введите координату x 3 точки')); // point c
let y3 = parseInt(prompt('Введите координату y 3 точки'));
let z3 = parseInt(prompt('Введите координату z 3 точки'));


let AB = (x2 - x1) + (y2 - y1) + (z2 - z1);
console.log('Длина вектора AB -- ' + AB);  
let BC = (x3 - x2) + (y3 - y2) + (z3 - z2);
console.log('Длина вектора BC -- ' + BC); 
let CA = (x3 - x1) + (y3 - y1) + (z3 - z1);
console.log('Длина вектора CA -- ' + CA);  

let result;

if          (AB === BC + CA) {
    result = "прямоугольный";
}   else if (BC === AB + CA) {
    result = "прямоугольный";
}   else if (CA === AB + BC) {
    result = "прямоугольный";
}   else {
    result = "НЕпрямоугольный";
}
console.log(result);

