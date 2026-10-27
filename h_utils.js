"use strict";
// 1. Partial
// - 인터페이스 타입들을 optional로 지정하는 속성
Object.defineProperty(exports, "__esModule", { value: true });
const address1 = { email: "test", address: "서울시" };
const address2 = {};
const address3 = { email: "test" };
const address4 = { address: "서울시" };
const address5 = { email: "test", address: "서울시" };
const myProduct = {
    id: 1,
    name: "그림",
    price: 10000,
    brand: "혜진",
    stock: 50
};
const NoBrandProduct = {
    id: 2,
    name: "그램",
    price: 10,
    stock: 1
};
const priceProduct = {
    name: "삼성노트북",
    price: 50000000
};
//# sourceMappingURL=h_utils.js.map