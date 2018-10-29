const a = parseFloat (prompt ('Enter coefficient a'));
const b = parseFloat (prompt ('Enter coefficient b'));
const c = parseFloat (prompt ('Enter coefficient c'));

function sqrtCalculator(a, b, с){
    
    const d = b * b - 4 * a * c;
    
    if (d < 0){
        return "Has no valid solutions"
    }
    
    const x1 = (-b + Math.sqrt(d))/(2 * a);
    const x2 = (-b - Math.sqrt(d))/(2 * a);
    
    if (d === 0) {
        return "Only result is " + x1;
        
    } else {
        return ("x1 = " + x1 + "\nx2 = " + x2);
    }
}

alert(sqrtCalculator(a, b, c));