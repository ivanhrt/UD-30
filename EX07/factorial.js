function factorial() {
    var n = document.getElementById("n").value;
    var n2 = n;
    var res = n2+"! = "+ n2;
    for (let num = 1; num < n2; num++) {
        n *= (n2-num);
        res += " = " + (n2-num);
    }
    
    document.getElementById("res").innerHTML = "Resultado: " + res + " = "+ n;
}
