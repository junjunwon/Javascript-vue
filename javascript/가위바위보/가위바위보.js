
var computer=0;
var RSP={//dictionary 자료구조
  rock:'0',
  scissor:'-142px',
  paper:'-284px',
};
//js객체는 딕셔너리 자료구조 역할을 할 수 있다. 1:1 매칭을 표현한다.

// var 가위바위보2={ //dictionary 자료구조
//   '-142px' : '가위',
//   '0': '바위',
//   '-284px':'보'
// };
function compute_choice(computer){
  return Object.entries(RSP).find(function(v){//find : 반복문, return true일 경우를 찾아주는 것.
    return v[1]===computer;
  })[0];
}
//Object.entries(객채) 로 객체를 배열로 바꿀 수 있다.

var scoreTable={
  rock:0,
  scissor:1,
  paper:-1,
}

console.log(scoreTable);
var interval;

function interval_maker(){
  interval=setInterval(function(){
    if(computer===RSP.rock){
      computer=RSP.scissor;
    } else if(computer===RSP.scissor){
      computer=RSP.paper;
    } else{
      computer=RSP.rock;
    }
    document.querySelector('#computer').style.background=
      'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)'+computer+' 0';
  }, 100);
  //setInterval은 100(0.1초) 마다 계속 실행됨.
}

interval_maker();



document.querySelectorAll('.btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    clearInterval(interval); // clearInterval로 멈춰준다.
    setTimeout(function(){
      interval_maker();

    }, 1000);

    var my_choice=scoreTable[this.textContent];
    var computer_c=scoreTable[compute_choice(computer)];

    console.log(my_choice, computer_c);
    var result=my_choice-computer_c;
    if(result===0){
      alert('비겼습니다.');
    } else if([1,-2].includes(result)){
      alert('졌습니다.');
    } else if([-1,2].includes(result)){
      alert('이겼습니다 .');
    }
    //result===2 || result===-1 대신 includes 사용
  });
});
