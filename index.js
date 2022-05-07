//* CONSTANTS
const $buttonsNumber = document.querySelectorAll(".calculator__buttons--number");
const $buttonsMathOperations = document.querySelectorAll(".calculator__buttons--operation");

const $buttonCallback = document.querySelector(".calculator__display-callback");
const $memory = document.querySelector(".calculator__memory");
const $textMemory = document.querySelector(".calculator__memory--text-calc");
const $resultMemory = document.querySelector(".calculator__memory--text-result");
const $closeCallback = document.querySelector(".calculator__memory--close");

const $buttonParenthesis = document.querySelector(".calculator__buttons--operation-parenthesis");
const $buttonPercentage = document.querySelector(".calculator__buttons--operation-percentage");
const $buttonSignal = document.querySelector(".calculator__buttons--signal");

const $displayInput = document.querySelector(".calculator__display-input");

const $result = document.querySelector(".calculator__display-result");

const $resultButton = document.querySelector(".calculator__buttons--result");
const $resetButton = document.querySelector(".calculator__buttons--reset");

//* VARIABLES
let calculateConvertToNumber = 0;
let parenthesis = false;
let result = 0;
let operation = false;
let callbackMemory = []
let calc = ''
let finalResult = ''

//* FUNCTIONS
function printMemory() {
  if(calc != '' && finalResult != ''){
    $textMemory.innerHTML = calc + '='
    $resultMemory.innerHTML = finalResult
  }
}

function getResult() {
  if ($displayInput.value.includes("×")) {
    result = $displayInput.value.replaceAll("×", " ");
    result = result.split(" ");
    $result.textContent = result[0] * result[1];
  }

  if ($displayInput.value.includes("÷")) {
    result = $displayInput.value.replaceAll("÷", " ");
    result = result.split(" ");
    $result.textContent = result[0] / result[1];
  }

  if ($displayInput.value.includes("+")) {
    result = $displayInput.value.replaceAll("+", " ");
    result = result.split(" ");
    $result.textContent = Number(result[0]) + Number(result[1]);
  }

  if ($displayInput.value.includes("-")) {
    result = $displayInput.value.replaceAll("-", " ");
    result = result.split(" ");
    $result.textContent = Number(result[0]) - Number(result[1]);
  }
  operation = false

  calc = $displayInput.value
  finalResult = $result.textContent
  callbackMemory.push( calc, finalResult)
}

//* NUMBER 
$buttonsNumber.forEach(function ($button) {
  $button.addEventListener("click", function () {
    $displayInput.value = $displayInput.value + $button.textContent;
    calculateConvertToNumber += Number($displayInput.value);
    operation = false;
  });
});

//* OPERATIONS
$buttonsMathOperations.forEach(function ($button) {
  $button.addEventListener("click", function () {
    if(!operation){
      getResult()

      if ($result.textContent == 0) {
        $displayInput.value = $displayInput.value + $button.textContent;
      } else {
        $displayInput.value = $result.textContent + $button.textContent;
      }
      operation = true; 
    }
  });
});

//* PARENTHESIS
$buttonParenthesis.addEventListener("click", function () {
  if (!parenthesis) {
    $displayInput.value = $displayInput.value + "(";
  } else {
    $displayInput.value = $displayInput.value + ")";
  }
  parenthesis = !parenthesis;
});

//* PERCENTAGE
$buttonPercentage.addEventListener("click", function () {
  result = Number($result.textContent) * 100;
  $result.textContent = result + "%";
});

//* SIGNAL +/-
$buttonSignal.addEventListener("click", function () {
  $result.textContent = $result.textContent * -1;
});

//* RESULT
$resultButton.addEventListener("click", function () {
  getResult()

  $displayInput.value = "";
  // $result.textContent = eval(result)
});

//* RESET BUTTON
$resetButton.addEventListener("click", function () {
  $displayInput.value = "";
  $result.textContent = "0";
  parenthesis = false;
  operation = false;
});

//* CALLBACK MEMORY
$buttonCallback.addEventListener("click", function () {
  $memory.classList.toggle('close')
  printMemory()
})

$closeCallback.addEventListener("click", function () {
  $memory.classList.toggle('close')
})

