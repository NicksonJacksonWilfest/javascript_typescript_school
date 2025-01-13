const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
try {
let color = COLOR_ORANGE;
alert(color); // #FF7F00
}
catch (Error)
{
    console.log(Error);
}

let name = "John";
console.log(`hello ${name}`); // hello John
console.log("hello ${name}"); // hello ${name}
console.log(`hello ${"name"}`) // hello name