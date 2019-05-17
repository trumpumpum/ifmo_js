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


