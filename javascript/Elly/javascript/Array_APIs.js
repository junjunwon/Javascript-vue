const fruits = ['apple', 'banana', 'orange'];
//join : 구분자를 넣어도 되고 넣지 않아도 된다. -> seperator?
//정의에서 ?가 붙어있으면 넣어도 되고 안넣어도 되는것
const result = fruits.join();
console.log(result);
console.log(fruits.join(':'));

//02. make an array out of a string
const fruits2 = 'apple,banana,orange';
//limit? -> 원하는 데이터만 전달받는다.
console.log(fruits2.split(',',2));

//03. make this array look like this : [5,4,3,2,1]
const array = [1,2,3,4,5];
const result2 = array.reverse();
console.log(result2);
console.log(array);
//위 배열과 같이 return해준 result2 변수뿐만 아니라 기존 array까지 reverse 되는 것을 확인할 수 있다.

//04. 앞에 두 원소를 제거하고 새로운 배열 만들기.
{
const array = [1,2,3,4,5,6];
const array2 = [1,2,3,4,5,6];
//splice 는 배열 자체에서 원소들을 삭제하게 된다. -> 새로운 배열을 만드는 것은 아니다.
const result = array.splice(0,2);
//배열에서 원소를 제거하고 새로운 배열을 만들기 위해서는 -> slice

const result2= array2.slice(2,5);
console.log(result);
console.log(array); //기존 array에서 원소를 제거한다.
console.log(result2);
console.log(array2);//새로운 배열에 적용하기 때문에 기존 array에는 영향이 없다.
}

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

// Q1. 90점인 학생을 찾아라.
{
    const result=students.find(function(student, index){
        // console.log(student, index);
        return student.score===90;
    });
    console.log(result);
}
{
    const result=students.find((student)=> student.score===90);
    console.log(result);
}

//Q2. make an array of enrolled students
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}

//Q3. make an array containing only the students'score
//result should be : [45, 80 ,90, 66, 88]
{
    //맵은 배열안에 들어있는 모든 요소들을 우리가 전달한 콜백함수를 호출하면서 리턴하는 값으로 대체하는 것.
    const result = students.map((student)=>student.score); //콜백함수 인자는 이해하기 쉽게 작성해야 나중에 코드가 복잡해져도 파악하기 용이 (value x -> student)
    console.log(result);
}

//Q4. check if there is a student with the score lower than 50
{   
    console.clear();
    const result = students.some((student)=>student.score<50); //어떤 하나가 만족하는지 확인
    console.log(result);
    const result2 = students.every((student)=>student.score<50); //모든 학생이 50점 미만일 경우에만 true
    console.log(result2);
}

//Q5. 학생들의 평균 점수 구하기
{
    console.clear();

    //reduce는 배열의 값들을 누적
    const result = students.reduce((prev, curr) => {
        console.log(prev); //두번째 호출부터 이전값이 출력되지 않는다. -> callback 함수는 리턴이 없으면 이전값이 없음.
        console.log(curr);
    })
    //prev : 이전에 콜백함수에서 return된 값이 전달되어져 온다.
    //curr : 배열의 아이템을 순차적으로 전달받는다.
    const result2 = students.reduce((prev, curr) => {
        console.log(prev); //두번째 호출부터 이전값이 출력되지 않는다. -> callback 함수는 리턴이 없으면 이전값이 없음.
        console.log(curr);
        return prev + curr.score; //return 하는 curr값이 prev로 전달된다.
    }, 0); // initial값이 0부터 호출한다.
    console.log(result2);

    //*reduceRight : 배열의 반대(length-1)부터 값을 누적

    //간단화
    const result3 = students.reduce((prev, curr) => prev+curr.score, 0);
    console.log(result3/students.length);
}

//Q6. 학생들의 모든 점수를 string으로 변환
//result should be : '45, 80, 90, 66, 88'
{
    console.clear();
    const result = students.map((student)=>student.score).toString();
    const result2 = students
        .map((student)=>student.score)
        .filter((score)=>score>=50)
        .join(':');
    console.log(result);
    console.log(result2);
}

//bonus 학생 점수를 오름차순으로 정렬해서 점수만 string ','으로 출력
//result should be : '45,66,80,88,90'
{
    const result = students
        .map((student)=>student.score)
        .sort((a,b)=>a-b) //내림차순 : b-a (b-a가 음수일 경우 true)
        .join();
    console.log(result);
}