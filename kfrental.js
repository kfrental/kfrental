var divMargen = document.getElementById("div-info");
var punto1 = document.getElementById("punto1");
var punto2 = document.getElementById("punto2");
var punto3 = document.getElementById("punto3");

var margenActual = parseFloat(window.getComputedStyle(divMargen).marginLeft);

function derecha() {
    var nuevoMargen = margenActual - 100;
    if (nuevoMargen >= -200) {
        divMargen.style.marginLeft = nuevoMargen + '%';
        margenActual = nuevoMargen;
    }
    actualizarPuntos();
}

function izquierda() {
    var nuevoMargen = margenActual + 100;
    if (nuevoMargen <= 0) {
        divMargen.style.marginLeft = nuevoMargen + '%';
        margenActual = nuevoMargen;
    }
    actualizarPuntos();
}

function actualizarPuntos() {
    punto1.style.backgroundColor = "transparent";
    punto2.style.backgroundColor = "transparent";
    punto3.style.backgroundColor = "transparent";
    
    if (margenActual === 0) {
        punto1.style.backgroundColor = "#f2f4f3";
    } else if (margenActual === -100) {
        punto2.style.backgroundColor = "#f2f4f3";
    } else if (margenActual === -200) {
        punto3.style.backgroundColor = "#f2f4f3";
    }
}

var listaNav = document.querySelector('.lista-nav');
var navAbierto = false;

function ajustarVisibilidadMenu() {
    var windowWidth = window.innerWidth;

    if (windowWidth > 900 && !navAbierto) {
        listaNav.style.display = "flex";
    } else if (windowWidth > 900 && navAbierto) {
        listaNav.style.display = "flex";
        listaNav.style.flexDirection = "row";
    } else if (windowWidth <= 900 && !navAbierto) {
        listaNav.style.display = "none";
    }
}

function menu() {
    if (navAbierto) {
        listaNav.style.display = "none";
        navAbierto = false;
    } else {
        listaNav.style.display = "flex";
        listaNav.style.flexDirection = "column";
        navAbierto = true;
    }
}


ajustarVisibilidadMenu();
window.addEventListener('resize', ajustarVisibilidadMenu);
window.addEventListener('load', ajustarVisibilidadMenu);

