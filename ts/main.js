"use strict";
// let users: string[] = ["Alish", "Mehemmed", "RZA"]
// let users: Array<string> = ["Alish", "Mehemmed", "RZA"]
// type UserType = {
//   id: number,
//   name: string,
//   cars: string[]
// }
// interface UserType extends UserType2 {
//   id: number,
//   name: string,
//   cars: string[],
// }
// interface UserType2 {
//   age: number
// }
// interface Alish extends UserType2 {
//   email: string
// }
// let user: UserType = {
//   id: 1,
//   name: "Alish",
//   cars: [],
//   age: 18
// }
// const obj: Alish = {
// }
// const obj2: UserType2 = {
// }
// function calc(a: number, b: number, c: string): number | string {
//   switch (c) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     default:
//       return "Error"
//   }
// }
// console.log(calc(3, 4, "+"));
// enum Direction {
//   up = "up",
//   down = "down",
//   left = "left",
//   right = "right"
// }
// function getDirection(direct: Direction) {
// }
// getDirection(Direction.top)
// enum MessageType {
//   info = "Info",
//   error = "Error",
//   warn = "Warning"
// }
// function logMessage(message: string, type: MessageType) {
//   console.log(type + ": " + message);
// }
// logMessage("Hello", MessageType.info);
// logMessage("Hello", MessageType.error);
// logMessage("Hello", MessageType.warn);
// interface Container {
//   value: number | null | undefined;
// }
// // type Container = {
// //   value: number | null | undefined
// // }
// // type Container = {
// //   value: number | null | undefined
// // }
// function multiplyValue(container: Container, factor: number) {
//   if (container.value != null) {
//     console.log(container.value);
//     container.value *= factor;
//   }
// }
// let firstName = "Murad"
// interface Admin {
//   role: string;
//   adminLevel: number;
// }
// interface User {
//   role: string;
// }
// function doTask(account: Admin | User) {
//   if ("adminLevel" in account) {
//     // TypeScript now knows account is Admin
//     console.log(`Admin Level: ${account.adminLevel}`);
//   }
// }
// function getLogData<Pervin>(param: Pervin[]): Pervin[] {
//   return param
// }
// // getLogData([4, 5, 5])
// function myForeach(arr, fn) {
//     for (const i of arr) {
//         fn(i);
//     }
// }
// myForeach([1, 3, 4], (item) => item);
// myForeach(["a", "b", "c"], (item) => item);
// myForeach([1, "d", true], (item) => item);
