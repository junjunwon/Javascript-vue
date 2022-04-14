// 'use strict'

// //콜백함수 대신 비동기적 수행을 하는 함수
// //state
// // pending : 기능 수행중인지
// // fulfilled or rejected : 수행 후 success/fail인지
// // Producer vs Consumer
// // 1. Producer(클래스)
// //새로운 producer이 만들어질때 callback함수인 executor이라는 함수가 자동으로 실행된다.
// // const promise = new Promise((resolve, reject)=>{
// //     //비동기특성으로 무거운 동작을 보통 진행한다.
// //     //네트워크나 무거운 동작(파일을 읽어온다던가)을 할때 동기적인 수행은 계속 기다려야하기 때문에 비동기적인 Promise를 사용한다.
// //     console.log('doing sth....');
// // });

// // const promise2 = 
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('junho');
//         reject(new Error('no network'));
//     },2000);
// });


// // 2. Consumers : promise를 이용? then, catch, finally
// promise2
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(()=>{console.log('finally')})


function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
        console.log("delay_check"+ms);
    });
}
    
function getBanana() {
    return delay(3000)
    .then(() => 'banana');
}
 
function getApple() {
    console.log('apple2'+delay(3000));
    console.log('apple3'+delay(2000));
    return delay(1000)
    .then(() => 'apple');
}

async function pickFruits() {
    const apple = getApple();
    // const banana = await getBanana();
    return `${apple}`;
  }
  
  pickFruits().then(console.log);
