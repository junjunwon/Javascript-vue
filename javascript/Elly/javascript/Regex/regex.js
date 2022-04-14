/*
정규표현식 연습 사이트 정보 : 
https://github.com/dream-ellie/regex : 엘리 github 정리
https://regexr.com/5mhou
https://regexone.com/ <- 예제 위주 
/regex?/ -> 정규식은 //로 감싸면 되는게 기본
*/

const regex = /(?:https?:\/\/)?(?:www.)?youtu.be\/([a-zA-Z0-9-]{11})/;
const url = 'http://www.youtu.be/-ZClicWm0zM';
const result = url.match(regex);
console.log(result); //배열 첫번째는 매칭되는 전체문자, 배열[1] : 매칭되는 그룹의 데이터
console.log("=============");
console.log(result[1]);
