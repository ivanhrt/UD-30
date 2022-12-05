function calcular() {
    var numero = document
        .getElementById("n")
        .value;

    if (numero % 2 == 0) {
        document
            .getElementById("res")
            .innerHTML = "PAR";
    } else {
        document
            .getElementById("res")
            .innerHTML = "IMPART";
    }
}