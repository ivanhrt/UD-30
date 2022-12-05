document.getElementById("submit").addEventListener("click", function() {
    var s = document.getElementById("txt").value;
    var res = "";

    if (s.split("").reverse().join("") == s) {
        res = "Es palindromo";
    } else {
        res = "No es palindromo";
    }

    alert(res);
});