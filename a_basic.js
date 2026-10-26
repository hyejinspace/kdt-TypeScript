"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//함축형 문법(implicit type assertion)
//값을 통해 타입을 알려주는 동적바인딩 문법
let strImpl = "string value"; //string
let numImpl = 10; //number
let boolImpl = true; // boolean
let arrayImpl = [1, 2, 3, 4]; // number array []
//정적 타입으로 바뀌었기 때문에 같은 타입만 들어갈 수 있음
// strImpl = 10
strImpl = "abc";
//함축형 문법은 지양함 !!!
//대신!
// 설명형 문법(explicit type annotation)
let strExpl = "string value";
let numExpl = 52.1234;
let boolExpl = true;
let strArrExpl = ["a", "b", "c"];
// strArrExpl.push(10)
strArrExpl.push("d");
//# sourceMappingURL=a_basic.js.map