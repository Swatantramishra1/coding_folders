// import {LinkedList} from "index.js";

const linkedlist = require("./index");


let stack = new linkedlist.LinkedList();

stack.addStack(3);
stack.addStack(2);

stack.addStack(6);

// stack.print();
// console.log("****************************************************************");
// console.log(stack.popFromStack());
// console.log(stack.popFromStack());

// console.log("****************************************************************");

// stack.print();

stack.addInMiddle(2, 10);
stack.addInMiddle(4, 11);
console.log("****************************************************************");
stack.findNthNodeFromEnd(1);
console.log("****************************************************************");
// stack.removeAt(2);

stack.print();