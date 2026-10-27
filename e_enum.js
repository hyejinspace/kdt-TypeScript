"use strict";
//언어를 사용할 때 상수의 규칙
//대문자로 표기하고 스네이크 표기법 사용
Object.defineProperty(exports, "__esModule", { value: true });
const MY_DATA = 1000;
var BasicDirection;
(function (BasicDirection) {
    BasicDirection[BasicDirection["Up"] = 0] = "Up";
    BasicDirection[BasicDirection["Down"] = 1] = "Down";
    BasicDirection[BasicDirection["Left"] = 2] = "Left";
    BasicDirection[BasicDirection["Right"] = 3] = "Right"; //3
})(BasicDirection || (BasicDirection = {}));
console.log(BasicDirection.Up);
const MyEnumFunc = (arrow) => arrow;
// MyEnumFunc("Up")//안됨
MyEnumFunc(BasicDirection.Up);
//# sourceMappingURL=e_enum.js.map