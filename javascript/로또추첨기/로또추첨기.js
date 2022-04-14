//var cand=Array(45); //Array(숫자)로 빈 배열을 만들 수 있다..(배열의 크기가 많을때)


var cand=Array(45)
    .fill()
    .map(function(i, index){
      return index+1;
    });  //mapping method
//위와 같은 형식을 많이 볼것임.

//보통 random하게 돌려서 추출할때는
//배열 전체를 random하게 섞고 그 중 앞에서부터 뽑고 싶은 개수만큼 뽑으면 된다.

var shuffle =[];
while(cand.length>0){
  //for문 : 자신이 정확하게 몇번 돌아야될지 알때.
  //while문  : 내가 몇번 반복문을 돌아야될지 모를때, 기준값이 계속 바뀔때 사용하면 좋다.
  var value=cand.splice(Math.floor(Math.random()*cand.length),1)[0]; //로또에서 실제로 랜덤을 할때는 math.random을 쓰면 안된다.
  shuffle.push(value);
}
console.log(shuffle);
var bonus=shuffle[shuffle.length-1];
var answers=shuffle.slice(0,6); //6번째자리는 포함되지 않고, 0,1,2,3,4,5로 배열이 잘림.
console.log(answers.sort(function (p,c){ return p-c;}),bonus);
//sort()를 하면 앞자리만 보고 오름차순을 한다.
//그래서 함수를 만들어서 매개변수 p,c를 빼준다. p-c : 오름차순,  c-p : 내림차순. p : 현재값, c : 다음값?


//var result=document.getElementById('결과창');
var result=document.querySelector('#결과창'); //#결과창, css처럼 id가 결과창인 애를 찾는것.
//getElementById or getElementsByClass보다 querySelector을 쓰는 것을 추천
//간편? querySelectorAll도 있다. (여러 태그 동시 선택)


function fill_color(number, result){
  var ball=document.createElement('div');
  ball.textContent=number;
  ball.style.display='inline-block';
  ball.style.border='1px solid black';
  ball.style.borderRadius='10px'; //html서는 border-radius
  ball.style.width='60px';
  ball.style.height='60px';
  ball.style.textAlign='center';
  ball.style.marginRight='20px';
  ball.style.fontSize='50px';
  //ball.id='ball_id : '+number;
  ball.className='ball_class'+number;
  //id를 설정해주면 html에서 해당 div에 id 가 부여된다.
  //html에서는 class를 쓰고 js에서는 className을 사용한다.
  //why? js에서 class는 중요한 요소기 때문에.
  var background;

  if(number<=10){
    background='red';
  }else if(number<=20){
    background='orange';
  }else if(number<=30){
    background='yellow';
  }else if(number<=40){
    background='blue';
  }else{
    background='green';
  }
  ball.style.background=background;
  result.appendChild(ball);
}




// ====================================================
//closure 문제
//배우기 전까지는 무식하게 하기.
// for(var i=0; i<answers.length; i++){
//   setTimeout(function 비동기콜백함수(){
//     var ball=document.createElement('div');
//     ball.textContent=answers[i];
//     result.appendChild(ball);
//   }, 1000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
// };
// ====================================================
// closure쓰기 전
setTimeout(function 비동기콜백함수(){
  fill_color(answers[0], result);
}, 1000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
setTimeout(function 비동기콜백함수(){
  fill_color(answers[1], result);
}, 2000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
setTimeout(function 비동기콜백함수(){
  fill_color(answers[2], result);
}, 3000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
setTimeout(function 비동기콜백함수(){
  fill_color(answers[3], result);
}, 4000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
setTimeout(function 비동기콜백함수(){
  fill_color(answers[4], result);
}, 5000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
setTimeout(function 비동기콜백함수(){
  fill_color(answers[5], result);
}, 6000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.
// ====================================================

// ====================================================
//closure로 문제 해결
for(var i=0; i<answers.length; i++){
  (function closure(j){
    setTimeout(function(){
      fill_color(answers[i], result);
    }, (j+1)*1000);
  })(i);
  //closure(i);
}
// ====================================================



setTimeout(function 비동기콜백함수(){
  var result=document.querySelector('.보너스'); //html에 배열처럼 여러개를 추가하고 가져올 수 있기 때문에, 0: 첫번째 클래스
  //querySelector를 하면 class가 보너스인 애를 찾는 것.[0]는 빼도 됨.
  fill_color(bonus, result);
  // var bonus_ball=document.createElement('div');
  // bonus_ball.textContent=bonus;
  // bonus_ball.style.display='inline-block';
  // bonus_ball.style.border='1px solid black';
  // bonus_ball.style.borderRadius='10px'; //html서는 border-radius
  // bonus_ball.style.width='30px';
  // bonus_ball.style.height='30px';
  // bonus_ball.style.textAlign='center';
  // bonus_result.appendChild(bonus_ball);
}, 7000);//1초에 한번씩 실행하게 해라. 밀리초 단위로 작성.



//실제 로또 사이트는 데이터 전처리를 통해 연속되는 숫자가 많은것들은 조금 제외하는 경향이 있다.
