// Import module.
//this is a color gradient
import Gradient from "javascript-color-gradient";
 
const colorGradient = new Gradient();
 
const color1 = "#3F2CAF";
const color2 = "#e9446a";
const color3 = "#edc988";
const color4 = "#607D8B";
 
colorGradient.setMidpoint(20);
 
colorGradient.setGradient(color1, color2, color3, color4);


//methods
setGradient(color1, color2);
setMidpoint(n);
getArray();
getColor(n);

//in action
console.log(colorGradient.getArray());
// outputs ["#4e4ab9", "#5d68c4", "#6d86ce", "#7ca4d9", "#8bc2e3"]
 
console.log(colorGradient.getColor(3));
// outputs #6d86ce
