"use strict"

// let user={
//     name:"john",
//     age:20,
//     sayHigh:function(){
//         console.log("Hii there");
//     }
// }

// let admin=user;
// user=null;

// console.log(admin);

// admin.sayHigh();

// let user={name:"john",arrowfunc(){
//     const arrowfunc=()=>{
//     console.log(this);
// }
// arrowfunc();
// }};
// let admin={name:"bob"};

// function sayHigh(){
//     console.log(this);
// }

// function lowHigh(){
//     console.log(this);
// }



// user.f=sayHigh;
// admin.f=sayHigh;

// admin.f();
// user['f']();

// lowHigh();


// admin.a=arrowfunc;

// admin.a();
// arrowfunc();

// user.arrowfunc();

// let arr=[1,2,3,4,5,6];
// let map_arr=arr.map((ele,idx,arr)=>{
//   return ele=ele*2;
// })

// let fruit=["apple","banana","mango"];


// console.log(map_arr);


// let for_Each_arr=arr.forEach((ele,idx,arr)=>{
//  ele=ele*2;
// //  console.log(ele);
// });

// let reducedArray=[1].reduce((acc,currvalue,curridx)=>{
//     return acc+currvalue;
// },4);

// console.log(for_Each_arr);
// console.log(reducedArray);


// const newPromise=new Promise((res,rej)=>{
//     let success=true;

//     if(success){
//         res("Promis fullfilled");
//     }else{
//         rej("Promise rejected");
//     }
// })

// // newPromise.then((res)=>console.log(res)).catch((err)=>console.log(err));

// console.log(newPromise);

// let [first,second,...others]=[1,2,3,4,5,6];

// // console.log(`${others}`);
// let {name,age,...otherFeat}={
//     name:"aziz",
//     age:20,
//     class:12,
//     field:"science"
// }

// console.log("age :",age);

// let multiArgumentFunc=function(arg,...allOther){
//     console.log(arg);
//     console.log(allOther.indexOf(5));
//     // allOther.splice(0,2,50,60);
//     let findElement=allOther.find((ele)=>ele===5);
//     console.log(findElement);
// }



// multiArgumentFunc(10,20,3,0,4,5,6,5)const newPromise=new Promise((res,rej)=>{
//     let success=true;

//     if(success){
//         res("Promis fullfilled");
//     }else{
//         rej("Promise rejected");
//     }
// })

// // newPromise.then((res)=>console.log(res)).catch((err)=>console.log(err));

// console.log(newPromise);

// let [first,second,...others]=[1,2,3,4,5,6];

// // console.log(`${others}`);
// let {name,age,...otherFeat}={
//     name:"aziz",
//     age:20,
//     class:12,
//     field:"science"
// }

// console.log("age :",age);

// let multiArgumentFunc=function(arg,...allOther){
//     console.log(arg);
//     console.log(allOther.indexOf(5));
//     // allOther.splice(0,2,50,60);
//     let findElement=allOther.find((ele)=>ele===5);
//     console.log(findElement);
// }



// multiArgumentFunc(10,20,3,0,4,5,6,5)

// console.log();

// function test(){
//     var a=10
//     console.log(`Outer a ${a}`);
//     if(a){
//         var a=a+10
//         console.log(`Inner ${a}`);
//     }
// }

// test();

// function go(n) {
//   // n here is defined!
//   console.log(n); // { a: [1, 2, 3] }

//   for (const b  of n.a) {

//     console.log(b);
//   }
// }

// go({ a: [1, 2, 3] });

// const p1=Promise.reject(1);
// const p2 = Promise.reject("one");
// const p3=Promise.reject(true);

// Promise.race([p1,p2,p3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// let arr=[1,[2,[3,4],5],6];

// let flatArr=arr.flat(1);
// console.log(flatArr);
// let rtnArray=arr.reduce((acc,currVal,currInd)=>{
//   console.log(currInd);
//   return(acc+currVal);
// });
// console.log(rtnArray);

// let index=arr.findIndex((n)=>n===4);
// console.log(index);



let string="Helper Setu";
let revString=string.split("").reverse().join("");
console.log(revString);