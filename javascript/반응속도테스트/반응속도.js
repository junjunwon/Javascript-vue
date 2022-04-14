var screen=document.querySelector('#screen'); //두고두고 쓰일 수 잇으므로 일단 변수에 저장하자.

//예약어 start_time과 같은 변수를 예약어라고 한다?

var start_time;
var end_time; 
var record=[];
var timeout

screen.addEventListener('click', function(){

    
    //performance.now() // 정밀한 숫자를 측정해야할 때.
    //console.log((end_time-start_time)/1000);
    if(screen.classList.contains('waiting')){
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent='순발력 테스트입니다. 초록색이 되면 클릭하세요. '
        timeout = setTimeout(function(){
            
            start_time=new Date();
            screen.click();

        }, Math.floor(Math.random()*1000)+2000);
        //class는 여러 스타일을 한번에 적용할 수 있어서 유용하다.
    }else if(screen.classList.contains('ready')){ // 준비상태 
        if(!start_time){ // 부정 클릭 -> now페이지로 가서 다시 시작. 
            clearTimeout(timeout); //settimeout을 변수에 대입하고 cleartimeout을 하면 시간이 초기화됨. 알아두기.
            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent='너무 성급하시군요. cunt!'
        }else{
            screen.classList.remove('ready');
            screen.classList.add('now');
            
        }
        

    } else if(screen.classList.contains('now')){
        end_time=new Date();
        console.log(end_time);
        var result=end_time-start_time;
        record.push(result);
        console.log('반응속도', end_time-start_time, 'ms');
        start_time=null;
        end_time=null;
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent='클릭해서 시작하세요.';
    }
});


