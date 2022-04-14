var num1=Math.ceil(Math.random()*9);

var num2=Math.ceil(Math.random()*9);

var question=document.createElement('div');
question.textContent=String(num1)+' 곱하기 '+String(num2);
document.body.append(question);

var form=document.createElement('form');
document.body.append(form);

var input=document.createElement('input');
//document.body.append(input);
input.type='number';
form.append(input);

var button=document.createElement('button');
button.textContent=' 정답 확인 ';
//document.body.append(button);
form.append(button);

var result=document.createElement('div');
document.body.append(result);
//document.body.append(result);

form.addEventListener('submit',function(e){
  e.preventDefault();
  console.log(input.value,Number(num1));
  if(Number(input.value)===(Number(num1)*Number(num2))){
    result.textContent='correct';
    input.focus();
    input.value='';
    num1=Math.ceil(Math.random()*9);
    num2=Math.ceil(Math.random()*9);
    question.textContent=String(num1)+' 곱하기 '+String(num2);
  }
  else{
    result.textContent='incorrect';
    input.focus();
    input.value='';
  }
});
//
// if(input.value===(Number(num1.textContent)*Number(num2.textContent))){
//   alert("correct");
// } else{
//   alert("incorrect");
// }

// while(true){
//   var num1=Math.ceil(Math.random()*9);
//   var num2=Math.ceil(Math.random()*9);
//
//   var result=prompt(num1+" * "+num2);
//
//   if(Number(result)===(num1*num2)){
//     alert('correct');
//   } else{
//     alert('incorrect');
//     break;
//   }
// }
