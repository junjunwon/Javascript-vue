class Counter {
	constructor(runEveryFiveTimes){
		this.counter = 0;
        this.callback = runEveryFiveTimes;
	}

	increase(runIf5Times, is){
		this.counter++;
        if(this.counter % 5 === 0) {
            if(this.callback && is ===false){ //콜백 함수를 인자로 전달할때만 실행되도록 작성 -> 생성자에 콜백함수가 있는데 new로 class를 호출할때 인자를 안넣었을때 undefiend되기 때문에 사전 방지.
                is == true;
                this.callback(this.counter);
            }
            
        }
    }
}
const coolCounter = new Counter(print);

function print(num){
    console.log(`yo! ${num}`);
};

let is = false;

while(true){
    debugger;
    coolCounter.increase(print, is);
    if(is===true){
        break;
    }
}


