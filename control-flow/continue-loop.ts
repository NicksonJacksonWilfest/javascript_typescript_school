// for (let i: number = 0; i < 10; i++) {
//
//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
//
//     console.log(i); // 1, then 3, 5, 7, 9
// }
for (let i:number = 0; i < 10; i++) {

    if (i % 2) {
       console.log(i);
    }

}

// Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

for (let i: number = 0; i < 3; i++) {
    for (let j: number = 0; j < 3; j++) {
        let input: string;
        input = prompt(`Value at coords (${i},${j})`, '');
        // what if we want to exit from here to Done (below)?
    }
}
console.log('Done!');