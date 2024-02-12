var x = 10;
var y = 20;
if (y > x) {
  console.log("y is greater than x");
}
else {
  console.log("x smaller than");
}
//swich statement
var z = 1;
switch (z) {
  case 1: console.log("hello from case one");
    break;
  case 2: console.log("hello from case two");
  case 3: console.log("hello from case three");
  case 4: logconsole.log("hello from case four");
  default: console.log("invalide input");
    break;
}
// while loops-----------
var k = 1;
var sum = 0;
while (k <= 10) {
  sum = sum + 10;
  k += 1;
}
console.log(sum);
for (let i = 0; i <= 5; i++) {
  console.log("welcome to edureka");

}
const newObj = [
  {
    id: 1,
    order: 'Below500',
    'orderpercentage': '10.05',
    restaurant: 'PunjabiTadka',
  },
  {
    id: 2,
    order: '500-1000',
    'orderpercentage': '14.57',
    restaurant: 'PunjabiTadka',
  },
  {
    id: 3,
    order: '1000-1500',
    'orderpercentage': '15.08',
    restaurant: 'PunjabiTadka',
  },
  {
    id: 4,
    order: '1500-2000',
    'orderpercentage': '22.11',
    restaurant: 'PunjabiTadka',
  },
  {
    id: 5,
    order: 'Above2000',
    'orderpercentage': '38.19',
    restaurant: 'PunjabiTadka',
  }
];
for (let obj of newObj) {
  console.log(obj['orderpercentage']);
}