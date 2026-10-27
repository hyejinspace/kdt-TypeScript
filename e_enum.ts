//언어를 사용할 때 상수의 규칙
//대문자로 표기하고 스네이크 표기법 사용

const MY_DATA = 1000

enum BasicDirection {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

console.log(BasicDirection.Up)

const MyEnumFunc = (arrow: BasicDirection) => arrow
// MyEnumFunc("Up")//안됨
MyEnumFunc(BasicDirection.Up)