//  xxd text.txt for getting char hexcode
//  xxd -b text.txt for getting char hexcode

import fs from 'fs/promises'

// console.log(await fs.readFile('text.txt')); //<Buffer e0 a4 85>

const contentBuffer = await fs.readFile('text.txt');
contentBuffer.forEach(el=>{
    process.stdout.write(el.toString(2)+' ')
})
let a = console.dir(contentBuffer);
console.log(a);

// Ouput will be 11100000 10100100 10000101