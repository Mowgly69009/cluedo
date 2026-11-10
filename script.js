function changerEtat(carte) {

    if (carte.classList.contains("barre")) {
        carte.classList.remove("barre");
        carte.classList.add("suspect");
        return;
    }

    if (carte.classList.contains("suspect")) {
        carte.classList.remove("suspect");
        return;
    }

    carte.classList.add("barre");
}

function rejouer() {

    if (!confirm("Voulez-vous vraiment remettre le carnet à zéro ?")) {
        return;
    }

    let cartes = document.querySelectorAll(".card");

    cartes.forEach(carte => {
        carte.classList.remove("barre");
        carte.classList.remove("suspect");
    });

}