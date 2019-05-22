/*Заданы два массива A = [ 12, 4, 3, 10, 1, 20 ] B = [-3, -7, -100, -33] 
необходимо их объединить в один массив C добавив массив B в конец(в начало) A. */


let A = [ 12, 4, 3, 10, 1, 20 ], B = [-3, -7, -100, -33];
let C_begin = A + B;
let C_end = B + A;
console.log(C_begin);
console.log(C_end);
typeof C_begin; 
typeof C_end;
console.log('Такое ли простое решение Вы ожидали?')


