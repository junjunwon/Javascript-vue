
var body=document.body;
var word = document.createElement('div');
// document 객체의 메서드를 사용해 html을 만들 수 있다.

word.textContent='원준호';
document.body.append(word);

var form =document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
button.textContent='input!!';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', function(event){
    if(word.textContent[word.textContent.length-1]===input.value[0]){
      //input.value === 입력될 값.
      event.preventDefault();

      result.textContent='correct';
      word.textContent=input.value;
      input.value='';
      input.focus();
    }else{
      result.textContent='incorrect';
      input.value='';
      input.focus();
    }
}); //안에 있는 function은 콜백함수! function 콜백함수 ()와 같이 이름을 붙혀도 된다.

//tag안에 들어가는 들어가는 글자들은 textContent로 가져오고,
//input으로 불러오면 value로 불러온다.

//사용자 편의
//입력을 누를때 마우스를 안만지게 하는 방법 -> 자동으로 버튼 클릭 후 입력창에 돌아가도록 하는 메소드가 focus()
//enter로 button 클릭하기
//   form태그 사용 -> form 리스너로 바꾸고, click -> submit으로 바꾼다.
//  이렇게 하면 버튼을 클릭하지 않고 엔터를 치는 것만으로도 버튼을 클릭할 수 있다.
// 문제는 submit를 하면 기본적으로 다른 페이지로 넘어가게 되어있다. ->그래서 새로고침이 되는데 이때 해당 페이지에 정보가 초기화 됨 (문제점)
// 이러한 기본 동작을 바꾸고 싶을때 매개변수(event).preventDefault()를 사용한다.
    //문제는 submit을submit할때마다 페이지가 새로고침 되는 것.


//javascript핵심은 비동기

//반복문을 이벤트리스너로 대체한 것과 동일하다.

// var word ='원준호'
// while(true){
//   var answer=prompt(word);
//   if(word[word.length-1]===answer[0]){
//       alert('correct');
//       word=answer;
//   } else{
//       alert("incorrect");
//       break;
//   }
// }
