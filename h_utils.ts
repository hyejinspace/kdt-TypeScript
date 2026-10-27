// 1. Partial
// - 인터페이스 타입들을 optional로 지정하는 속성

interface Address {
    email: string;
    address: string;
}

type NewAddress = Partial<Address>

const address1: Address = {email: "test", address: "서울시"}
const address2: NewAddress = {}
const address3: NewAddress = {email: "test"}
const address4: NewAddress = {address: "서울시"}
const address5: Address = {email: "test", address: "서울시"}

// 2.Omit 
// 특정 속성만 제거한 타입을 정의하게 만드는 타입
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type NoBrandProduct = Omit<Product, "brand">

const myProduct:Product = {
    id: 1,
    name: "그림",
    price: 10000,
    brand: "혜진",
    stock: 50
}

const NoBrandProduct: NoBrandProduct = {
    id: 2,
    name: "그램",
    price: 10,
    stock: 1
}

//3. Pick
// 원하는 것을 골라와서 새로운 타입을 만드는 타입

type MyProduct = Pick<Product, "name" | "price">
const priceProduct: MyProduct = {
    name: "삼성노트북",
    price: 50000000
}