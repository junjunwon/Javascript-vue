class Counter {
    constructor(runEvery5Times){
        this.counter = 0;
        this.callback = runEvery5Times;
    }
    //exception, 함수를 파라미터로 넘기는.
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter); //if there is callback func, execute callback func. 
        }
    }
}

//build class like lego block. 
const coolCounter = new Counter();
const print1Counter = new Counter(printSomething);
const print2Counter = new Counter(alertNum);

function printSomething(num){
    console.log(`yo! ${num}`); //benefit : we can adjust the sentences
}
function alertNum(num){ //alert is not defined in vscode.
    alert(`Wow! ${num}`);
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();


