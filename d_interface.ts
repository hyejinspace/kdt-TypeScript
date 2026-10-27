//강제성
export interface Animal {
    species: string;
    canSpeak: boolean;
    numberOfLegs?: number;
}

const dog: Animal = {
    canSpeak: true,
    species: "강아지",
    numberOfLegs: 4
}

const snake: Animal = {
    canSpeak: false,
    species: "뱀",
}

//Fixed value

interface Machine {
    powerLevel: number;
    meterial: "metal" | "plastic"; //값이들어오면 고정됨
}

//강제성이 있음 (무조건 넣어야함)
const myMachine: Machine = {
    powerLevel: 10,
    meterial: "metal"
}


//Union(합) Type
type MyUnionType = Machine & Animal

const MyUnionAnimal: MyUnionType = {
    canSpeak: false,
    meterial: "metal",
    powerLevel: 5,
    species: "인조동물"
}

// 넣고싶은 값이 여러개면 넣고싶은 타입을 나열하면 된다.
type MyTpe = string | number
const datas: string | number = "value1"


//type Intersect
// 옵셔널과 필수값 -> 필수값으로 변경되는 현상
interface Type1 {
    prop1: number;
    prop2?: string;
}

interface Type2 {
    prop2: string;
    prop3: string;
}

type NewType = Type1 & Type2
const object: NewType = {
    prop1: 10,
    prop2: "a",
    prop3: "b"
}//겹치는 프롭2 타입을 강제해버림



