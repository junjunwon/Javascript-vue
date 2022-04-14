'use strict';

//1. Declaration

const arr1 = new Array();

const arr2 = [1, 2];

console.log(arr1);

console.log(arr2);

//index : 배열은 index를 기준으로 데이터를 저장한다.

//2. Index Position
const fruits = ['사과', '바나나'];

console.log(fruits);

console.log(fruits.length);

console.log(fruits[0]);                             //데이터 접근방법 (대괄호 + index)

console.log(fruits[1]); 

console.log(fruits[2]);                             //아무것도 없으면 undefined

console.log(fruits[fruits.length-1]);               //마지막 데이터 접근 

// 배열은 index가 0부터 시작하기 때문.
console.log("\n");

//3. Looping over an array
//print all fruits

const fruits = ['사과', '바나나'];

//방법 (1) 
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//방법 (2)
for(let fruit of fruits){
    console.log(fruit);
}
//방법 (3)
console.log("\n");
fruits.forEach(function(fruit, index, array){
    console.log(fruit,index, array);
});
                                
fruits.forEach((fruit, index, array)=>console.log(fruit)); //위와 같이 이름이 없는 function은 arrow 함수로 대체 가능.


//더하기, 빼기, 복사
const fruits = ['사과', '바나나'];

//add an item to the end - 마지막 index에 데이터 삽입
fruits.push("오렌지");

console.log(fruits);

//remove an item from the end - 마지막 index 데이터 제거
const temp = fruits.pop();                              //pop된 data를 return해준다. 

console.log(fruits);


const fruits = ['사과', '바나나'];

//unshift : add an item to the beginning                 - 맨 앞 index에 데이터 삽입

fruits.unshift('딸기');

console.log(fruits);

//shift : remove an item from the beginning

fruits.shift();

console.log(fruits);



// 중요한 note!! shift, unshift are slower than pop and push
// 뒤에서부터 넣고 빼는 것은 빈공간에 데이터를 넣고 지우기 때문에, 기존 데이터는 움직이지 않기 때문에 빠른 operation이 가능하다.
// 반대로 앞에서 데이터를 넣게 되면 기존 index들을 +1 해서 데이터 위치를 바꾸고 비워진 index에 데이터를 넣기 때문!
// -> 이로 인해 pop, push를 사용하는 것이 유리하다.
// 중간이나 끝에서 데이터를 추가, 삭제하는 것이 빠르다.
// 배열이 길거나, 데이터 삭제, 삽입을 위해 기존 데이터를 옮겨야 되는 경우 연산 속도는 느려질 수 밖에 없다.

// splice : reomve an item by index position
fruits.splice(1); //index만 명시하고 지우고자 하는 개수를 명시하지 않으면 index 1부터 array.length-1 까지 데이터를 전부 제거한다.
console.log(fruits);
const fruits2 = ['사과', '바나나','오렌지'];
// fruits2.splice(1,1);
console.log(fruits2);
fruits2.splice(1,1, '수박','귤'); //index1을 제거하고 해당 위치에 데이터를 삽입
console.log(fruits2);

//combine two arrays
const fruits3 = ['낑깡', '키위'];
const newFruits = fruits2.concat(fruits3);
console.log(newFruits);

//검색
console.log(fruits);
console.log(fruits.indexOf('사과'));            //데이터의 index위치 찾기.
console.log(fruits.includes('바나나'));         // 배열에 바나나 데이터가 있는지 여부
console.log(fruits.includes('귤'));         //false
console.log(fruits.indexOf('귤'));      //귤이 없는 경우 -1 출력 


//LastIndexof
fruits.push('사과');
console.log(fruits.indexOf('사과'));        //index 0부터 검색 -> 일치하면 바로 index 출력
console.log(fruits.lastIndexOf('사과'));        //index array.length-1 부터 검색 -> 일치하면 바로 index 출력

