let impares = [];
cont = true;
for (let i = 1; i <= 21; i += 2) {
    impares.push(i);
}

function apartadoA() {
    document.getElementById("a").innerHTML = `La suma de los impares comprendidos entre 1 y 21 es \
    ${impares.reduce((a, b) => a + b, 0)}.`
}

function apartadoB() {
    if (cont) {
        document.getElementById("b").innerHTML = `Orden inverso del Array --> \
        ${impares.sort((a, b) => b - a).join(", ")}.`;
        cont = false;
    }
    else {
        document.getElementById("b").innerHTML = `Orden inverso del Array --> \
        ${impares.join(", ")}`;
    }
}

function buscar() {
    let numero = parseInt(document.getElementById("numero").value);
    let exito = document.getElementById("c");
    let posicion = impares.indexOf(numero)
    if (posicion !== -1) {
        exito.innerHTML = `¡Éxito! El número ${numero} se encontraba en la posición ${posicion}`;
        impares.splice(posicion, 1);
    } else {
        exito.innerHTML = "No tuviste éxito.";
    }
    apartadoA();
    apartadoB();
    let imparesCopia = [...impares];
    document.getElementById("e").innerHTML = `Orden ascendente del Array --> \
                                        ${imparesCopia.sort((a, b) => a - b).join(", ")}`;
}
document.getElementById("e").innerHTML = `Orden ascendente del Array --> \
                                        ${impares.join(", ")}`;
apartadoA();
apartadoB();
