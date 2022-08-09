function plus(){
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1+num2;
    document.getElementById('out').innerHTML = 'Result: ' + result;
}
function minus(){
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1-num2;
    document.getElementById('out').innerHTML = 'Result: ' + result;
}
function multiply(){
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1*num2;
    document.getElementById('out').innerHTML = 'Result: ' + result;
}
function divide(){
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1/num2;
    document.getElementById('out').innerHTML = 'Result: ' + result;
}