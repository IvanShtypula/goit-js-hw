'use strict';

// const formatString = function(string) {
//    if(string.length >= 40) {
//     //  console.log(string);
//     const array = string.split('');
//     // console.log(string.length);
//     let formatedString = array.slice(0,40).join('') + '...';
//     return formatedString;
//    }
//    return string;
// };

const formatString = function(string) {
   if(string.length >= 40) {
    let formatedString = string.slice(0,40) + '...';
    return formatedString;
   }
   return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));





