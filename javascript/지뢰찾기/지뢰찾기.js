var tbody=document.querySelector('#table tbody');
var dataset=[];
var stopFlag=false;
var opened_block=0;//클릭한 블록



document.querySelector('#exec').addEventListener('click', function(){
    //게임을 새로시작하는 것 구현
    //================초기화 코드
    
    tbody.innerHTML='';//tbody 내부 태그들을 다 지워버리는 것.
    dataset=[]; //dataset를 매 게임마다 초기화해서 값 누적을 방지.
    document.querySelector('#result').textContent='';
    stopFlag=false;
    opened_block=0;

    //================초기화 코드 끝

    var time =500;//기준 시간 작성
    var min=""; //분
    var sec=""; //초

    //setInterval(함수, 시간) : 주기적인 실행
    var x=setInterval(function(){
        //parseInt() : 정수를 반환
        min=parseInt(time/60); //몫 계산
        sec=time%60;//나머지 계산

        document.querySelector('#timer').innerHTML=min+" 분 "+sec+" 초";
        time--;
        if(stopFlag){
            clearInterval(x);
            document.querySelector('#timer').innerHTML='00 분 00 초';
        }
        if(time<0){
            clearInterval(x); 
            document.querySelector('#timer').innerHTML='시간초과';
            stopFlag=true;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'YOUR TIME IS OVER!',
              })
            //alert('게임이 종료되었습니다. failed(시간초과)');
        }
    },1000);


    var hor=parseInt(document.querySelector('#hor').value);
    var ver=parseInt(document.querySelector('#ver').value);
    var mine=parseInt(document.querySelector('#mine').value);

    console.log(hor, ver, mine);

    //지뢰 위치 뽑기
    var candi=Array(hor*ver)
        .fill()
        .map(function(i, index){
            return index;
        }); //후보군 만드는 법은 외워두기! 
    
    var shuffle=[];
    while(candi.length>hor*ver-mine){
        var move=candi.splice(Math.floor(Math.random()*candi.length),1)[0];
        shuffle.push(move);
    }
    console.log(shuffle);
    //지뢰 위치 뽑기 끝.



    //tbody안에 10*10 테이블을 삽입.

    for(var i=0; i<ver; i++){
        var arr=[];
        dataset.push(arr);
        var tr=document.createElement('tr');

        for(var j=0; j<hor; j++){
            arr.push(0);
            var td=document.createElement('td');
            
            td.addEventListener('contextmenu', function(e){
                e.preventDefault();
                if(stopFlag){
                    return;
                }
                
                //target : contextmenu가 발생한 태그(여기서는 td)
                //깃발을 넣기 위해 클릭한 블럭의 좌표를 알아보자.
                var parent_tr=e.currentTarget.parentNode;
                var parent_tbody=e.currentTarget.parentNode.parentNode;
                //indexof는 배열에만 해당되는데 children은 유사배열(?)이기 떄문에 못쓴다.
                //indexof를 강제로라도 쓰기 위해서는 Array.prototype으로 감싸준다.
                var block=Array.prototype.indexOf.call(parent_tr.children, e.currentTarget);
                
                var line=Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
                console.log(parent_tr,parent_tbody, e.currentTarget,block,line);

                //여기서 키포인트는 지뢰 위에 깃발을 올렸다가 !->?->X로 가야되는데, (지뢰는 계속 있기 떄문에) 지뢰가 없어지는 현상이 생긴다.
                //이때 dataset[line][block]에는 반영하지 않는다. 즉 지뢰 위에 ?일때 지뢰 데이터를 dataset에서 가져온다.
                if(dataset[line][block]===1){
                    return;
                }
                else if(e.currentTarget.textContent==='' || e.currentTarget.textContent==='X'){
                    e.currentTarget.textContent='!';
                    e.currentTarget.classList.remove('question');
                    e.currentTarget.classList.add('flag');
                }
                
                else if(e.currentTarget.textContent==='!'){
                    e.currentTarget.textContent='?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('question');
                }else if(e.currentTarget.textContent==='?'){
                    e.currentTarget.classList.remove('question');
                    if(dataset[line][block]==='X'){
                        e.currentTarget.textContent='X';
                    }else if(dataset[line][block]===0){
                        e.currentTarget.textContent='';
                    }
                }
            });
            td.addEventListener('click', function(e){
                if(stopFlag){
                    return; //함수의 실행 중간에 끊기.
                }

                //클릭했을때 주변 지뢰 개수
                var parent_tr=e.currentTarget.parentNode;
                var parent_tbody=e.currentTarget.parentNode.parentNode;
                var block=Array.prototype.indexOf.call(parent_tr.children, e.currentTarget);
                var line=Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
                if(dataset[line][block]===1 || e.currentTarget.textContent==='?' || e.currentTarget.textContent==='!'){
                    return;
                }
                e.currentTarget.classList.add('opened');
                opened_block++;
                console.log(opened_block,hor,ver,mine);
                if(dataset[line][block]==='X'){
                    e.currentTarget.textContent='boom!!';
                    document.querySelector('#result').textContent='failed';
                    Swal.fire({
                        icon: 'error',
                        title: 'Boom!!!! YOU LOST',
                        text: 'YOUR TIME IS OVER!',
                      })
                    stopFlag=true;
                }else{
                    //dataset[line-1][block-1]]
                    dataset[line][block]=1;
                    var nearby=[
                        dataset[line][block-1],
                        dataset[line][block+1]
                    ];
                    if(dataset[line-1]){
                        nearby=nearby.concat(dataset[line-1][block-1], 
                            dataset[line-1][block],
                            dataset[line-1][block+1]);
                    }
                    if(dataset[line+1]){
                        nearby=nearby.concat(dataset[line+1][block-1],
                            dataset[line+1][block],
                            dataset[line+1][block+1]); 
                    }
                    console.log(nearby);


                    //주변이 0인 주변 칸들 전부 체크.
                    var number_mines=nearby.filter(function(v){
                        return v==='X' //v는 요소. 즉 textContent
                    }).length;
                     
                    //거짓인 값 : false, '', 0, null, undefined, NaN
                    // number_mines || ''는 위 거짓인 값 중 하나가 number_mines에 오면 || 뒤에 있는 ''로 대신 입력해라.
                    e.currentTarget.textContent=number_mines || '';
                    if(number_mines===0){
                        console.log('주변을 엽니다.');
                        var nearby_block=[];
                        if(tbody.children[line-1]){
                            nearby_block=nearby_block.concat([
                                tbody.children[line-1].children[block-1],
                                tbody.children[line-1].children[block],
                                tbody.children[line-1].children[block+1],
                            ]);
                        }
                        nearby_block=nearby_block.concat([
                            tbody.children[line].children[block-1],
                            tbody.children[line].children[block+1],
                        ]);
                        if(tbody.children[line+1]){
                            nearby_block=nearby_block.concat([
                                tbody.children[line+1].children[block-1],
                                tbody.children[line+1].children[block],
                                tbody.children[line+1].children[block+1],
                            ]);
                        }

                        nearby_block.filter(function(v){
                            return !!v; //undefined같은거는 제거하고 return?
                        }).forEach(function(next_blocks){
                            var parent_tr=next_blocks.parentNode;
                            var parent_tbody=next_blocks.parentNode.parentNode;
                            var next_block=Array.prototype.indexOf.call(parent_tr.children, next_blocks);
                            var next_line=Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
                            if(dataset[next_line][next_block]!==1){
                                next_blocks.click();
                            }
                        });
                    }  
                     
                }
                if(opened_block===hor*ver-mine){
                    stopFlag=true;
                    console.log(opened_block);
                    Swal.fire(  'Good job!',  'THANK YOU FOR PLAYING THIS GAME!',  'success' ) 
                    //document.querySelector('#result').textContent="you successed this game. congragulation";
                }
            });
            tr.appendChild(td);
            //td.textContent=1;
        }
        tbody.appendChild(tr);
    }
    //console.log(dataset);

    //지뢰심기
      for(var i=0; i<shuffle.length; i++){
          var ver2=Math.floor(shuffle[i]/ver);
          var hor2=(shuffle[i]%ver);
          console.log(ver2,hor2);
          console.dir(tbody);
          
          tbody.children[ver2].children[hor2].textContent='X';
          dataset[ver2][hor2]='X';
      }
    //지뢰심기 끝
    
});
//오른쪽 클릭 이벤트 추가(contextmenu) - 깃발 추가

//tbody안에 어떤 td를 클릭해도 깃발이 생기도록!

tbody.addEventListener('contextmenu', function(e){
    console.log(e.currentTarget, e.target);
})

//재귀함수
function recrusive(number){
    if(number<10) {
        console.log(number);
        recrusive(number+1);
    }
}
recrusive(1);