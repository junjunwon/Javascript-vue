var body=document.body
var table=document.createElement('table');
var blocks=[];
var lines=[];
var turn='X';
var 클릭 = function(e){
  var raw=lines.indexOf(e.target.parentNode);
  var col=blocks[raw].indexOf(e.target);
  console.log(raw,col);

  if(blocks[raw][col].textContent!==''){
    console.log('빈칸이 아니다. back off!');
  }else{
    console.log('빈칸이다. 값을 채워라.');
    blocks[raw][col].textContent=turn;

    //채웠으면 체크
    //가로줄 완성
    var result=false;
    if(blocks[0][col].textContent===turn &&
      blocks[1][col].textContent===turn &&
      blocks[2][col].textContent===turn){
        result=true;
    }

    //세로줄 완성
    if(blocks[raw][0].textContent===turn &&
      blocks[raw][1].textContent===turn &&
      blocks[raw][2].textContent===turn){
        result=true;
    }
    //대각선 완성(\)
    if(raw===col){
      if(blocks[0][0].textContent===turn &&
        blocks[1][1].textContent===turn &&
        blocks[2][2].textContent===turn){
          result=true;
      }
    }

    //대각선 완성(/)
    if(raw===col || Math.abs(raw-col)===2){
      if(blocks[0][2].textContent===turn &&
        blocks[1][1].textContent===turn &&
        blocks[2][0].textContent===turn){
          result=true;
      }
    }
    if(blocks[0][2].textContent===turn &&
      blocks[1][1].textContent===turn &&
      blocks[2][0].textContent===turn){
        result=true;
    }

    if(result){
      alert(turn+'님이 승리하셨습니다.');

      turn='X';
      blocks.forEach(function(line){
        line.forEach(function(block){
          block.textContent='';
        })
      })
    }

    //값을 변경해주기.
    if(turn==='X'){
      turn='O';
    } else{
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
    block.addEventListener('click', 클릭);
    blocks[i-1].push(block);
    line.appendChild(block);
  }
  table.appendChild(line);
}
body.appendChild(table);
console.log(table);
