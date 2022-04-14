class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 20, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
]
//reduce는 배열의 값들을 누적

// const result = students.reduce((prev, curr,index) => {
//     console.log(index+"  , prev : "+prev); //두번째 호출부터 이전값이 출력되지 않는다. -> callback 함수는 리턴이 없으면 이전값이 없음
//     console.log(index+"  , curr : "+curr);
//     return index;
// },0);
//prev : 이전에 콜백함수에서 return된 값이 전달되어져 온다.
//curr : 배열의 아이템을 순차적으로 전달받는다.

console.log(students);
const result2 = students.reduce((prev, curr) => {
    console.log(prev); //두번째 호출부터 이전값이 출력되지 않는다. -> callback 함수는 리턴이 없으면 이전값이 없음.
    console.log(curr);
    return prev+curr.score; //return 하는 curr값이 prev로 전달된다.
}, 0); // initial값이 0부터 호출한다.
console.log(result2/students.length);