//그럼 이 테이블 내 각각을 어떻게 자바스크립트로 표현하는가??
//table작업은 가능하면 html로 하는게 좋다.  why? javascript로 table을 구현하는건 너무 정신없음.


var body=document.body;
var table=document.createElement('table');

var lines=[];
var blocks=[];
var turn='X';
var 표시 =function(e){
  console.log(e.target);
  console.log(e.target.parentNode);
  console.log(e.target.parentNode.parentNode);
  console.log(e.target.children); //자식 노드를 보여주는데 현재는 td가 제일 막내므로 하위 노드는 없다.

  //e.target===클릭된 애
  //e.target.parentNode===클릭된 애 부모 태그.

  var lineN=lines.indexOf(e.target.parentNode);//몇번째 줄인가?
  console.log(lineN);
  var colN=blocks[lineN].indexOf(e.target);//몇번째 칸인가?
  console.log(colN);
  if(blocks[lineN][colN].textContent!==''){//칸이 이미 채워져 있는가?
    console.log('빈칸이 아니다');
    alert('fuckoff')
  }
  else{
    console.log('빈칸이다.');
    blocks[lineN][colN].textContent=turn;

    var answer=false;
    if(blocks[lineN][0].textContent===turn &&
      blocks[lineN][1].textContent===turn &&
      blocks[lineN][2].textContent===turn ){//컬럼 정답일 경우
        answer=true;
    }
    if(blocks[0][colN].textContent===turn &&
      blocks[1][colN].textContent===turn &&
      blocks[2][colN].textContent===turn ){//행 정답일 경우
        answer=true;
    }
    if(lineN===colN){//대각선 (\방향이 정답일 경우)
      if(blocks[0][0].textContent===turn &&
        blocks[1][1].textContent===turn &&
        blocks[2][2].textContent===turn ){//행 정답일 경우
          answer=true;
      }
    }
    if(lineN===colN || Math.abs(lineN-colN)===2){//대각선 (\방향이 정답일 경우)
      if(blocks[0][2].textContent===turn &&
        blocks[1][1].textContent===turn &&
        blocks[2][0].textContent===turn ){//행 정답일 경우
          answer=true;
      }
    }
    if(answer){
      alert(turn+'님이 승리하셨습니다.');
      turn='X';
      blocks.forEach(function(line){
        line.forEach(function(block){
          block.textContent='';
        })
      })
    }
    if(turn==='X'){
      turn='O';
    }else{
      turn='X';
    }
  }
};


for(var i=1; i<=3; i++){
  var line=document.createElement('tr');
  lines.push(line);
  blocks.push([]);
  for(var j=1; j<=3; j++){
    var block=document.createElement('td');
    block.addEventListener('click', 표시);
    console.log(blocks[i-1].push(block));
    line.appendChild(block);
  }
  table.appendChild(line);
}
body.appendChild(table);
console.log(blocks);
