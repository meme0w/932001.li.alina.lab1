// JavaScript код калькулятора
const calculator = document.getElementById('calculator');
const expression = document.getElementById('expression');
const lastChar = document.querySelector('.inputBlack');

let currentExpression = '0';
let currentResult = 0;
let previousOperatorClicked = true;
let previousLastCharArray = [];

// Обработчик нажатия кнопок
calculator.addEventListener('click', event => {
  const target = event.target;

  // Если нажата кнопка цифры
  if (target.matches('button:not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equals):not(#decimal)')) {
    // Если текущее выражение равно '0', то заменяем '0' на нажатую цифру
    if(previousOperatorClicked == true){
      lastChar.innerHTML = '';
      previousOperatorClicked = false;
    }
    if (currentExpression.toString() === '0') {
        currentExpression = target.textContent;
        lastChar.innerHTML += target.textContent;
        } else {
        currentExpression +=  target.textContent;
        lastChar.innerHTML += target.textContent;
        }
        expression.innerHTML = currentExpression;
    }   

    // Если нажата кнопка операции
    else if (target.matches('button:not(#clear):not(#backspace):not(#equals):not(#decimal):not(#zero)')) {
      if(previousOperatorClicked == false){
        previousLastCharArray.push(lastChar.innerHTML.toString());
        lastChar.innerHTML = '';
        previousOperatorClicked = true;
        currentExpression +=  " " + target.textContent  + " ";
        lastChar.innerHTML += " " + target.textContent  + " ";
        previousLastCharArray.push(lastChar.innerHTML.toString());
        expression.innerHTML = currentExpression;
        console.log(previousLastCharArray);
      }
    }
    
    // Если нажата кнопка 'AC'
    else if (target.matches('#clear')) {
      lastChar.innerHTML = '0';
      currentExpression = '0';
      currentResult = 0;
      previousLastCharArray = [];
      expression.innerHTML = currentExpression;
      expression.innerHTML = currentResult;
      currentExpression = '0';
      previousOperatorClicked = true;
    }
    
    // Если нажата кнопка 'CE'
    else if (target.matches('#backspace')) {
      if(previousOperatorClicked == false){
        lastChar.innerHTML = lastChar.innerHTML.toString().slice(0, -1);
        currentExpression = currentExpression.toString().slice(0, -1);
        if(lastChar.innerHTML.toString() === ''){
          previousOperatorClicked = true;
        }
      }
      else{
        lastChar.innerHTML = '';
        previousLastCharArray.pop();
        currentExpression = currentExpression.toString().slice(0, -3);
        previousOperatorClicked = false;
      }

      if (lastChar.innerHTML.toString() === '') {
          lastChar.innerHTML = previousLastCharArray[previousLastCharArray.length-1];
          if(previousOperatorClicked==false){
          previousLastCharArray.pop();
          }
      }
         
         // Если текущее выражение пустое, то устанавливаем значение '0'
        if (currentExpression === '') {
          currentExpression = '0';
          lastChar.innerHTML = '0';
          previousOperatorClicked = true;
        }
       
        expression.innerHTML = currentExpression;
    }

    // Если нажата кнопка '='
    else if (target.matches('#equals')) {
        currentResult = eval(currentExpression);
        currentResult = parseFloat(currentResult.toFixed(7));
        expression.innerHTML = ' ';
        previousLastCharArray = [];
        lastChar.innerHTML = currentResult;
        currentExpression = currentResult;
        console.log(currentResult);
    }
    
    // Если нажата кнопка '.'
    else if (target.matches('#decimal')) {
        // Проверяем, что текущее выражение не содержит '.'
        if (!lastChar.innerHTML.toString().includes('.')) {
          lastChar.innerHTML += target.textContent;
          currentExpression += '.';
          expression.innerHTML = currentExpression;
        }
      }
    });