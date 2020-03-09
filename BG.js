var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var rgb1   = document.getElementById("rgb1");
var rgb2   = document.getElementById("rgb2");
var button = document.querySelector("button");
var body   = document.querySelector("body");

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
    throw new Error('Bad Hex');
}
function cssText(){
    rgb1.innerHTML = hexToRgbA(color1.value);
    rgb2.innerHTML = hexToRgbA(color2.value);
}

color1.oninput = function(){
   backgroundChange();
    cssText();
}
color2.oninput = function(){
    backgroundChange();
    cssText();
}

function backgroundChange(){
    body.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

//RANDOM BUTTON
button.addEventListener("click", function(){
    var r1 = Math.floor(Math.random() *256);
    var g1 = Math.floor(Math.random() *256);
    var b1 = Math.floor(Math.random() *256);

    var r2 = Math.floor(Math.random() *256);
    var g2 = Math.floor(Math.random() *256);
    var b2 = Math.floor(Math.random() *256);

    color1.value = "#" + fullColorHex(r1, g1, b1);
    color2.value = "#" + fullColorHex(r2, g2, b2);
    backgroundChange();
    cssText();
            
})
//CONVERTING RGB TO HEX
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
};







