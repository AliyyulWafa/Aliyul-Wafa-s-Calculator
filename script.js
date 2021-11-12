const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number)=>{
    calculatorScreen.value = number
}
const numbers = document.querySelectorAll(".number")


let prevNumber = ''
let calculationOperator =''
let currentNumber = '0'
let currentOperator = '0'

const inputNumber = (number)=>{
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }    
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")
const inputOperator = (operator =>{
    if (calculationOperator===''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
})

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})


const calculate = () => {
    let result =''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "x":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "÷":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case"%":
            result = parseFloat(prevNumber) / parseFloat(100)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',()=>{
calculate()
updateScreen(currentNumber)
})

const clearAll = () => {
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

const deleteNumber = () => {
    currentNumber = currentNumber.slice(0,-1);
}
const deleteButton = document.querySelector('.delete')
deleteButton.addEventListener('click',()=>{
    deleteNumber()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(decimal)

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
