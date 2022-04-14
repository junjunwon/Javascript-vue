class Calculator {
    constructor(displayElement){
        this.displayElement = displayElement
        this.operatorCheck = true // 연산자 선택 여부 저장. 
        this.equalsCheck = false
        this.clear()
    }

    appendNumber(number){
        if(this.equalsCheck){
            this.displayContent = number
            this.equalsCheck = false
        } else {
            this.displayContent += number
        }
        this.displayContent +=number
        this.operatorCheck = false // 숫자 입력시 false 
    }
    appendOperator(operator){
        if(this.operatorCheck) return 
        this.displayContent += operator
        this.operatorCheck = true
    }
    updateDisplay(){
        this.displayElement.value = this.displayContent
    }
    clear(){
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }
    compute(){
        if(this.operatorCheck) return
        this.displayContent=eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/'))
        this.equalsCheck = true
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.dataset.type){
            case 'operator' :
                console.log('operator')
                if(calculator.appendOperator(button.innerText)){
                    calculator.updateDisplay()
                }
                break
            case 'ac':
                console.log('ac')
                calculator.clear()
                break
            case 'equals':
                console.log('equals')
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})


