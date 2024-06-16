let op;

function setOperator(operator) {
    op = operator;
}

function calc() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
  
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2) {
                result = num1 / num2;
            } else {
                result = 'бесконечность';
            }
            break;
        default:
            result = 'выберите операцию';
    }

    document.getElementById("result").innerHTML = result;
}

function calc2() {
    let equ = document.getElementById("equation").value;
    let result;

    try {
        result = eval(equ);
    } catch (error) {
        result = 'Ошибка в выражении';
    }
    
    document.getElementById("result").innerHTML = result;
}