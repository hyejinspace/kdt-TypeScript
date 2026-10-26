"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//기본문법
function explFunction() { }
const explFunctionArrow = () => { };
//정수 두 개를 받아서 콘솔에 출력하는 함수
function explFunction01(num1, num2) {
    console.log(num1 + num2);
}
//성과 이름을 더해서 풀네임을 반환하는 함수
const explFunctionArrow01 = (lastName, firstName) => lastName + firstName;
//Optional Parameter
const funcWithOptional = (x, y, z) => {
    // type이 옵셔널이면 타입을 검증 해야함(강제)
    if (y === undefined) {
        return x;
    }
    if (z === undefined) {
        return x + y;
    }
    return x + y * z;
};
funcWithOptional(1);
funcWithOptional(1, 2);
funcWithOptional(1, 2, 3);
// Rest Parameter(...)
// const functionWithParams = (...number: number[]):number => {
//     let total: number = 0
//     for(let n of number){
//         total += n 
//     }
//     return total
// }
const functionWithParams = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
console.log(functionWithParams(10, 20));
//# sourceMappingURL=b_function.js.map