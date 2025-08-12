// import axios from "axios";

// console.log(axios)

function fileName(str){
return str.split(' ').join('_')
}
const getFileName = fileName('How npx Works?');
console.log(getFileName)