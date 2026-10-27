// // const anyText = (text: any) => {
// //     console.log(text);
// //     return text
// // }

// // // anyText(10)
// // // anyText("a")
// // // anyText([])

// // function genericText<T>(value: T): T {
// //     console.log(value)
// //     return value
// // }

// // genericText<string>("a")

// // const genericTextArray = <T>(value: T): T => value

// // console.log(genericTextArray<number[]>([1,2,3]))

// // 응용 1. 제네릭 + 인터페이스
// const myFunc = <T>(value: T): T => value

// interface myGeneric {
//     <T>(value:T): T;
// }

// const myFunc2: myGeneric = myFunc

// // 응용2. 제네릭 + 인터페이스(key고정)
// interface ProductItem {
//     name: string;
//     price: number;
//     stock: number;
// }

// const getProductKey = <T extends keyof ProductItem>(key: T): T => {
//     return key
// }

// getProductKey("name")
// getProductKey("price")
// getProductKey("stock")

// // 응용3. 제네릭 + 인터페이스(일반적인 사용)
// const getProduct = <T extends ProductItem>({name, price, stock}: T): string => {
//     return `${name}은 ${price}원 입니다.`
// }

// const myProduct: ProductItem = {
//     name: "노트북",
//     price: 200000,
//     stock: 5
// }

// let result: string = getProduct(myProduct)
// console.log(result)


// // 제네릭 + fetch
// // https://jsonplaceholder.typicode.com/posts
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// const getDatas = async <T>(url: string): Promise<T[]> => {
//     const response = await fetch(url)
//     const datas: T[] = await response.json()
//     return datas
// }

// getDatas<Post>("https://jsonplaceholder.typicode.com/posts")
//     .then((data: Post[]) => (console.log(data)))



// 유저데이터 이름만 가져와서 출력하기
// https://jsonplaceholder.typicode.com/users
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const getUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await response.json()
    return users
}

getUsers()
    .then((users: User[]) => users.map(({name}: User) => name))
    .then((names: string[]) => names.slice(0, 5))
    .then(console.log)
    .catch(console.error)