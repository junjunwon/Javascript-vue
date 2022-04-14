var body=document.body;

//중복되는 부분을 함수로 빼는 작업을 하자.
//변수를 따로 선언해서 빼고, 중복되는 부분은 전부 똑같이 만든다.
var cand_num;
var array_num;

function electing_nums(){
  cand_num=[1,2,3,4,5,6,7,8,9];
  array_num=[]; //랜덤하게 들어가야 된다.
  for(var i=0; i<4; i++){
    //주의할점! 해당 작업은 뽑으면서 cand_num에서 제거된다.
    //예를 들어, 6을 뽑으면 [1,2,3,4,5,7,8,9,undefined]
    //var selected=cand_num.pop(); 뒤에서부터 하나씩 뽑기.
    //var selected=can_num.shift(); //앞에서부터 하나씩 뽑기.
  var selected=cand_num.splice(Math.floor(Math.random()*(9-i)),1)[0];

  //splice(위치, 개수) 하면 위치로부터 개수만큼 배열에서 뽑는다.
  //Math.random()*9 = 1부터 9까지 랜덤한 숫자중 하나를 선택 -> 즉, 위치가 랜덤이 됨.
  //그 위치로부터 1개만 뽑는데, 배열로 뽑혀서 옴.(배열을 반환)
  //array_num 배열에 원소로 넣기 위해서 [0]번째 원소 대입
  //배열 index=0 ~8을 원하기 때문에 floor

    array_num.push(selected); //index=0부터 1칸씩 +1 차례로 넣어줌.
    //array_num.unshift(selected); // index =0 에 계속 추가.
  }
}
electing_nums();


console.log(array_num);
var count=document.createElement('div');
count.textContent=10;
document.body.append(count); // 카운트해주기.


var result=document.createElement('div');
document.body.append(result);

var form=document.createElement('form');
document.body.append(form);

var input=document.createElement('input');
input.type='number';
form.append(input);

var button =document.createElement('button');
button.textContent='입력';
form.append(button);



form.addEventListener('submit', function(e){
  e.preventDefault();
  //console.log(Number(count.textContent)===9);
  if(Number(count.textContent)===0){
    alert('게임이 종료됐습니다. 동전을 넣으세요.');
    result.textContent='홈런 정답은'+array_num.join(', ')+'였습니다. ';
    return false;
  }

  console.log(count.textContent--);
  var next=count.textContent--;
  count.textContent=next;

  var input_answer=input.value;
  //var answer=array_num.join('');
  //console.log(input_answer, answer);
  console.log(array_num.join(''));
  if(input_answer===array_num.join('')){
    result.textContent='홈런';
    input.value='';
    input.focus();

    electing_nums();
    
    console.log(array_num);
  } else{
    var input_array=input_answer.split('');
    var strike=0;
    var ball=0;
    for(var i=0; i<4; i++){
      if(Number(input_array[i])===array_num[i]){ //같은 자리는 여기서 다 처리됨.
        strike++;
        //배열.indexof(값) : 값의 위치를 알 수 있다. 없으면 -1.
      } else if(array_num.indexOf(Number(input_array[i]))> -1){ //같은 자리는 아니지만 숫자가 겹치는지 확인.
        ball++;
      }
    }
    result.textContent=strike+' strike , '+ball+' ball';
    input.value='';
    input.focus();
  }
  //배열을 문자열로 바꾸고 비교한다.
  // if(input_answer===array_num.join('/')){
  //   result.textContent='홈런';
  //   input.value='';
  //   input.focus();
  //   var cand_num=[1,2,3,4,5,6,7,8,9];
  //   var array_num=[];
  //
  //   for(var i=0; i<4; i++){
  //     var selected=cand_num.splice(Math.floor(Math.random*(9-i)), 1)[0];
  //     array_num.push(selected);
  //   }
  //   //위와 같이 중복되는 부분은 나중에 함수로 빼자.
  //
  // }
  // else{
  //   var input_answer=input.value;
  //   input_answer.split();
  //   console.log(input_answer);
  // }
  //문자.split(구분자) -> 배열
  //배열.join(구분자) -> 문자
});
