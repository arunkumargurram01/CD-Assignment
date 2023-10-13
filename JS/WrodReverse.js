 const str = "This is a demo String";

const words = str.split(' ');

let reversedStr = '';

for(let i=0; i<words.length; i++){
    let s = words[i].split('').reverse().join("");
    reversedStr = reversedStr.concat(s," ");
}

console.log(reversedStr)

