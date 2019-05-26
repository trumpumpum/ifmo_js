/*Заданы два массива A = [ 12, 4, 3, 10, 1, 20 ] B = [-3, -7, -100, -33] 
необходимо их объединить в один массив C добавив массив B в конец(в начало) A. */
console.log('1 task:');
let A = [ 12, 4, 3, 10, 1, 20 ], B = [-3, -7, -100, -33];
let C = A.concat(B);
console.log(C);

/*2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик. */

// var area = [ 1, null, 0, null, 1, null, null, null, null ];



// for (let i = 0; i < area.length; i += 3) {
//     var tr = createElement('tr');
//     for (let j = 0; j < 3; j++) {
//         if (area[i] = 1) {
//             document.createElement("1");
//         } else if (i = 0) {
//             document.createElement("img"); 
//         } else {

//         }

//     }    
       
// }

// 3. Задан массив  - [12,4,3,10,1,20]. 
// Удалить из него наименьшее и наибольшее значение.
let arr = [12,4,3,10,1,20];
let min = arr[0], max = arr[0];
let index_max, index_min;
for (var i = 0; i < arr.length; i++) { //Ищем наиб и наим значения и их индексы
    if (arr[i] < max) {
        max = arr[i];
        index_max = i;        
    }
    if (arr[i] > min) {
        min = arr[i];
        index_min = i;
    }
}
var removedmax = arr.splice(index_min, 1);
var removedmin = arr.splice(index_max, 1);
console.log(arr);

/*4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
с номерами от 000001 до 999999. 
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
теперь раздумывает, как много сувениров потребуется. 
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.  */

let ticketNumber = [000001];
for (i = 1; i <= 999999; i++) {
    
}




var removedItem = fruits.splice(pos, 1)
arr.splice(arr.indexOf(min), 1); 


// arr.splice(arr.indexOf(min), 1);
console.log(arr.splice(arr.indexOf(index_max), 1));
console.log(arr.splice(arr.indexOf(index_min), 1));

arr.splice(arr.indexOf(min), 1);
console.log(arr.splice([index_max, index_min]));


console.log(arr);
console.log(min);
console.log(max);
console.log(index_max);
console.log(index_min);





for (let i = 0; i < pics.length; i++) {
    let img = document.createElement("img"); // будет создан э-т img
    img.setAttribute("src", "pics/", pics[i]);
    document.getElementById('pics').appendChild(img);
}
