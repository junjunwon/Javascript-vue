// C_choice : 컴퓨터 선택
// P_choice : 사람 선택
var RSP={
  rock:'0',
  scissor:'-142px',
  paper:'-284px',
}
C_choice=0;

function computer_choice(C_choice){
  return Object.entries(RSP).find(function(v){
  
    return v[1]===C_choice;
  })[0];
}
console.log(computer_choice);

var score={
  rock:0,
  scissor:1,
  paper:-1,
}
setInterval(function() {
  if(C_choice===RSP.rock){
    C_choice=RSP.scissor;
  }else if(C_choice===RSP.scissor){
    C_choice=RSP.paper;
  } else{
    C_choice=RSP.rock;
  }
  document.querySelector('#RSP').style.background=
  'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)'+C_choice+' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    console.log(this.textContent,computer_choice(C_choice));
    var P=this.textContent;
    var C=computer_choice(C_choice);
     console.log(score[P]);
    var result=(score[P]-score[C]);
    console.log(result);
    if(result===0){
      alert('비겼습니다.');
    }else if(result===2 || result===-1){
      alert('이겼습니다.');
    }else if(result===1 || result===-2){
      alert('졌습니다.');
    }

  })
});