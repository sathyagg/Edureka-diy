const newString = "welcome to edureka";
const strLength = newString.length;
console.log(strLength);
var stringExample = "123456789";
document.write("slicing without parameters:" + stringExample.slice(),"<br>","<br>") 
document.write("sling with only start  index:" + stringExample.slice(2),"<br>")
document.write("sling with only start & end index:" + stringExample.slice(2,10),"<br>")
document.write("sling with only start & end index:" + stringExample.slice(-5),"<br>")

document.write("sling with only start & end index:" + stringExample.slice(2,-5),"<br>")
let supStrval = newString.substr();
console.log(supStrval);
supstrval = newString.substr(4);
console.log(supstrval);
supstrval = newString.substr(8,3);
console.log(supstrval);
supstrval = newString.substr(2,2);
console.log(supstrval);
supstrval = newString.substr(-2);
console.log(supstrval);
var repl = "welcome to edureka";
document.write(repl.toUpperCase());