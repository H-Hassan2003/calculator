let totalSum = 0
let firstNum = 0
let secondNum = 0
const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")
const operator = document.getElementById("operator")
const calculate = document.getElementById("calculate")

document.getElementById("add").addEventListener("click", function(){
    operator.value = "+"
})
document.getElementById("subtract").addEventListener("click", function(){
    operator.value = "-"
})
document.getElementById("multiply").addEventListener("click", function(){
    operator.value = "*"
})
document.getElementById("divide").addEventListener("click", function(){
    operator.value = "/"
})

calculate.addEventListener("click", function(){
    firstNum = parseInt(firstNumber.value)
    secondNum = parseInt(secondNumber.value)
    if(operator.value === "+") {
        totalSum = firstNum + secondNum
        operator.value = totalSum
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(operator.value === "-") {
        totalSum = firstNum - secondNum
        operator.value = totalSum
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(operator.value === "*") {
        totalSum = firstNum * secondNum
        operator.value = totalSum
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(operator.value === "/") {
        totalSum = firstNum / secondNum
        operator.value = totalSum
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(!operator.value) {
        operator.value = "Please enter an operator!"
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(firstNum === 0) {
        operator.value = "Please enter two numbers to calculate!"
        firstNumber.value = ""
        secondNumber.value = ""
    } else if(secondNum === 0) {
        operator.value = "Please enter two numbers to calculate!"
        firstNumber.value = ""
        secondNumber.value = ""
    }
})