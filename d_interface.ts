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