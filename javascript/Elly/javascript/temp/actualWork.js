
// document.getElementById("result").onclick = function(){
//     add(input1, input2);
// }
// function add(){
//     const input1 = document.querySelector("value1");
//     const input2 = document.querySelector("value2");
//     return value1+value2;
// }
// const obj1 = {
//     name : 'junho', //변수 objectA는 객체 자체를 저장하고 있는 것이 아니라, 생성된 객체를 가리키는 참조값을 저장하고 있다.
//     age : 5
// }
// // obj2=obj1
// // obj1 ={
// //     name :'a',
// //     age : 2
// // }
// obj1.name = 'ab'
// console.log(obj1)
// // console.log(obj2)

function add(a, b){
    return a+b;
}

function result(add){
    console.log(add);
}
result(add(2,3))