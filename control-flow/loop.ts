let x:number = 10;
while (x <= 10) {
    console.log(x);
    x+=1;
}

do {
    console.log(x);
    x++;
} while (x <= 10);

for (let i = 1; i <= x; i++) {
    console.log(i);
    // alert(i); works in browser
}

let v: number=0;
for(; v <= x ; v++){  //without initial int inside a loop
    console.log(v);
}


for(; v <= x;){  //without initial int inside a loop
    console.log(v++);
}

// while (t < 3)  {
//     console.log(t);
// }

let sum: number = 0;
while (true) {
    let value: number = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}
console.log( 'Sum: ' + sum );