document.getElementById("submit").addEventListener("click", function () {
    var s = document.getElementById("txt").value;
    var res = "";

    if (s === s.toUpperCase()) {
        res = "Full Mayusculas";
    } else if (s === s.toLowerCase()) {
        res = "Full Minusculas";
    } else {
        res = "Mezcla ambas";
    }

    alert(res);
});