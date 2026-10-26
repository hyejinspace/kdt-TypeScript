"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const explObject = {
    att1: "string value",
    att2: 20.123,
    someArrowFunc: () => console.log("마지막 시간이다 ㅠ"),
    someFunc: function (num1, num2) {
        return num1 + num2;
    }
};
const MyObject01 = {
    a: "홍길동",
    b: "장보고",
    c: "이순신"
};
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: 92998 - 3874,
        geo: {
            lat: -37.3159,
            func: () => { return [1, 2, 3]; }
        }
    }
};
//쌤 풀이
// 확장형 문법
// 유저의 타입 붙이기
// type UserGeo = {
//     lat: number,
//     func: () => number[]
// }
// type UserAddress = {
//     street: string,
//     city: string,
//     zipcode: number,
//     geo: UserGeo
// }
// type User = {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: UserAddress
// }
// const user: User = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         city: "Gwenborough",
//         zipcode: 92998-3874,
//         geo: {
//             lat: -37.3159,
//             func: () => { return [1,2,3] }
//         }
//     }
// }
//# sourceMappingURL=c_object.js.map