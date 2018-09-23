module.exports = function solveEquation(equation) {
    // Your solution here
    let [a, b, c] = getValues(equation);
    return getXList(a, b, c);
}

// Determine a,b,c and return in an array
function getValues(equation) {
    // ax^2 + bx + c
    let a = equation.split(' * x^2')[0];
    let aSign = equation.split(a + ' * x^2')[0];
    // Assigns +- a
    a = parseInt(aSign + a);
    let bSign = equation.split(a + ' * x^2 ')[1].charAt(0);
    let b = equation.split(' * x^2 ' + bSign + ' ')[1].split(' * x ')[0];
    // Assigns +- b
    b = parseInt(bSign + b);
    // Assigns +- b
    let cSign = equation.split(' * x ')[1].charAt(0);
    let c = equation.split(' * x ' + cSign + ' ')[1];
    // Assigns +- c
    c = parseInt(cSign + c);
    return [a, b, c];
}
// Returns ordered Array
function getXList(a, b, c) {
    let list = [];
    list.push(getX('+', a, b, c));
    list.push(getX('-', a, b, c));
    list.sort((a, b) => a - b);
    return list;
}
// Returns X
function getX(sign, a, b, c) {
    // represent x = (- b +- √b^2-4ac)/2a as x = (b1 +- c1)/a1 
    let x, b1, a1, c1;
    b1 = parseInt(- + b);
    a1 = 2 * a;
    c1 = Math.sqrt((b * b) - 4 * a * c);
    return x = Math.round((sign === '+') ? ((b1 + c1) / a1) : ((b1 - c1) / a1));
}
