// function sum() {
//     var result=null;
//     for (let i = 0; i < arguments.length; i++) {
//         let argument = arguments[i];
//             argument=Number(argument);
//         console.log(arguments);
//         isNaN(argument)?null:result+=argument;
//     }
//     return result;
// }
//
// console.log(sum(10, '20'));


//2.
// let sum = (...arg) =>  eval(arg.filter(item => !isNaN(item)).join('+'));
// console.log(sum(10, 20,'22'));
