// Menu Mobile

let btnMenuOpen = document.getElementById("btn-menu-open");
let btnMenuCancel = document.getElementById("btn-menu-cancel");
let menu = document.getElementById("menu");
let tamanho = window.innerWidth;

btnMenuCancel.style.display = "none";

if (tamanho <= 720) {
    
    btnMenuOpen.addEventListener("click", function abrirMenu() {
        btnMenuOpen.style.display = "none";
        btnMenuCancel.style.display = "flex";
        menu.style.display = "flex";
    });

    btnMenuCancel.addEventListener("click", function fecharMenu() {
        btnMenuOpen.style.display = "flex";
        btnMenuCancel.style.display = "none";
        menu.style.display = "none";
    });
}
else {

    btnMenuOpen.style.display = "none";
    btnMenuCancel.style.display = "none";
    menu.style.display = "flex";
}
