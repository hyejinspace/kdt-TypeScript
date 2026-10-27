"use strict";
// // const anyText = (text: any) => {
// //     console.log(text);
// //     return text
// // }
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
};
getUsers()
    .then((users) => users.map(({ name }) => name))
    .then((names) => names.slice(0, 5))
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=g_generic.js.map