var cand=Array(45).fill().map(function(i,index){
  return index+1;
});

//섞자.

var random=[];
while(cand.length>0){
  var mixed=cand.splice(Math.floor(Math.random()*cand.length),1)[0];
  random.push(mixed);
}

console.log(cand); //empty
console.log(random); //mixed Array

//6개의 정답과 1개의 보너스 배열

//6개 정답
//앞에서 6개 출력 (랜덤 배열에서)
var result=document.querySelector('#result');
for(var i=0; i<6; i++){
  ball_maker(random[i], result);
}

var bonus=random[random.length-1];
console.log(bonus);
var bonus_result=document.querySelector('.bonus');
ball_maker(bonus, bonus_result);

//여기까지 볼 출력 완료!

//다음에 해야될 부분은 각 볼들의 style함수를 만든다.
function ball_maker(number, result){
  var ball=document.createElement('div');
  ball.textContent=number;
  ball.style.display='inline-block';
  ball.style.border='1px solid black';
  ball.style.marginRight='20px';
  ball.style.borderRadius='10px';
  ball.style.height='50px';
  ball.style.width='50px';
  ball.style.textAlign='center';
  ball.style.fontSize='30px';
  ball.id='ball id '+number;

  var background;
  if(number<=10){
    ball.style.background='red';
  }else if(number<=10){
    ball.style.background='orange';
  }else if(number<=20){
    ball.style.background='yellow';
  }else if(number<=30){
    ball.style.background='blue';
  }else if(number<=40){
    ball.style.background='white';
  }else{
    ball.style.background='gray';
  }

  result.appendChild(ball);
};
