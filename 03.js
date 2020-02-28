let csv = `NAME, CATEGORY, PRICE 
Xiaomi Redmi 5A, Smartphone, 1199000 
Macbook Air, Laptop, 13775000 
Samsung Galaxy J7, Smartphone, 3549000 
DELL XPS 13, Laptop, 26799000 
Xiaomi Mi 6, Smartphone, 5399000 
LG V30 Plus, Smartphone, 10499000`;

let arr = csv.split('\n');

let object = [];
let result = arr[0].split(',');
for(let i =1; i< arr.length; i++){
    let data = arr[i].split(',');
    let obj = {};
    for(let j=0; j< data.length; j++){
        obj[result[j].trim()] = data[j].trim();
    }
    object.push(obj);
} 



console.log(JSON.stringify(object));