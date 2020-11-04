function calculaMedia(gender) {
    var total = 0;
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === gender || gender === null) {
            total += usuario.age;
            quantidade++;
        }
    }

    return total / quantidade;
}

function somaIdades() {
    var soma = 0;
    for (var usuario of usersList) {
        soma += usuario.age;
    }

    return soma;
}

function quantidadeDeHomens() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "male") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeDeMulheres() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "female") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeTotal() {
    return usersList.length;  
}

window.addEventListener('load', function () {
    // Soma das idades
    document.getElementById("somaIdades").innerText = somaIdades();
    // Media geral de idade
    document.getElementById("mediaGeral").innerText = calculaMedia(null).toFixed(0);
    // Média de idade dos homens
    document.getElementById("mediaHomens").innerText = calculaMedia("male").toFixed(0);
    // Media de idade das mulheres
    document.getElementById("mediaMulheres").innerText = calculaMedia("female").toFixed(0);

    // População de homens
    document.getElementById("percHomens").innerText = ((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(2) + "%";    
    document.getElementById("percHomensBar").style = `width: ${((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(2)}%`;
    
    // População de mulheres
    document.getElementById("percMulher").innerText = ((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(2) + "%";    
    document.getElementById("percMulherBar").style = `width: ${((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(2)}%`;     

    /* Mostrar horas
    substring = copia uma parte da string, nesse caso, do zero ao 8 (0 - 8)
    
    */
    setInterval(function() {
        document.getElementById("horario").innerText = new Date().toTimeString().substring(0, 8);
    }, 1000);

    var usuario = JSON.parse(localStorage.getItem("usuario"));
});


var int = 2;
var img = document.getElementById("foto2");
window.addEventListener("load", function trocafoto2(int){
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    img.src = usuario.picture.large;
    
});

var ont = 2;
var nome = document.getElementById("nomeLogado");
window.addEventListener("load", function trocafoto2(ont){
    var usuario = JSON.parse(localStorage.getItem("usuario"));
   nome = document.getElementById("nomeLogado").innerText = usuario.name;
    
});