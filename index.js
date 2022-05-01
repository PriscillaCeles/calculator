const $buttonsNumber = document.querySelectorAll('.calculator__buttons--number')
const $buttonsMathOperations = document.querySelectorAll('.calculator__buttons--operation')

const $buttonmultiply = document.querySelector('.calculator__buttons--operation-mult')
const $buttonDivision = document.querySelector('.calculator__buttons--operation-divi')
const $buttonParenthesis = document.querySelector('.calculator__buttons--operation-parenthesis')
const $buttonPercentage = document.querySelector('.calculator__buttons--operation-percentage')

const $displayInput = document.querySelector('.calculator__display-input')

const $result = document.querySelector('.calculator__display-result')

const $resultButton = document.querySelector('.calculator__buttons--result')
const $resetButton = document.querySelector('.calculator__buttons--reset')

let calculateConvertToNumber = 0 
let multiply = false
let division = false
let parenthesis = false
let result = 0


$buttonsNumber.forEach(function($button){
    $button.addEventListener('click', function(){
        $displayInput.value = $displayInput.value + $button.textContent
        calculateConvertToNumber += Number($displayInput.value)
        console.log(calculateConvertToNumber)
    })
})

$buttonsMathOperations.forEach(function($button){
    $button.addEventListener('click', function() {
        if($result.textContent == 0){
        $displayInput.value = $displayInput.value + $button.textContent
        console.log(calculateConvertToNumber)
        } else {
            $displayInput.value = $result.textContent + $button.textContent

        }
    })
})

$buttonmultiply.addEventListener('click', function() {
    multiply = true
})

$buttonDivision.addEventListener('click', function() {
    division = true
})

$buttonParenthesis.addEventListener('click', function() {
    if(!parenthesis){
        $displayInput.value = $displayInput.value + '('
    } else {
        $displayInput.value = $displayInput.value + ')'
    }

    parenthesis = !parenthesis
})

$buttonPercentage.addEventListener('click', function() {
    result = Number($result.textContent) * 100
    $result.textContent = result + '%'
})


$resultButton.addEventListener('click', function(){
    result = $displayInput.value
    if(multiply){
        result = $displayInput.value.replace('×',"*")
        multiply = false
        console.log(result)
        console.log(multiply)
    } 
    if (division){
        result = $displayInput.value.replace('÷', '/')
        division = false
        console.log(result)
        console.log(division)
    }

    console.log(result)
    $result.textContent = eval(result)
    // $result.textContent = calculateConvertToNumber (Não funciona pq os operadores estão como string)
})

$resetButton.addEventListener('click', function() {
    $displayInput.value =''
    $result.textContent =''
})