let detectiveNom = "";
let detectiveImage = "";

function choisirDetective(nom, image, carte) {

    detectiveNom = nom;
    detectiveImage = image;

    let detectifs = document.querySelectorAll(".detectif");

    detectifs.forEach(c => {
        c.classList.remove("suspect");
    });

    carte.classList.add("suspect");

    document.getElementById("btnCommencer").style.display = "block";
}

function commencerEnquete() {

    document.getElementById("selection").style.display = "none";
    document.getElementById("jeu").style.display = "block";

    document.getElementById("detectiveChoisi").innerHTML =
        "<img src='" + detectiveImage + "' class='avatar'>" +
        "<h2>Détective : " + detectiveNom + "</h2>";
}

function changerEtat(carte) {

    const section =
        carte.closest(".section")
             .querySelector("h2")
             .innerText;

    if (carte.classList.contains("barre")) {

        carte.classList.remove("barre");

        document
            .querySelectorAll(".section")
            .forEach(sec => {

                if (
                    sec.querySelector("h2").innerText === section
                ) {

                    sec.querySelectorAll(".card")
                        .forEach(c => {
                            c.classList.remove("suspect");
                        });
                }

            });

        carte.classList.add("suspect");

        majHypothese(section, carte);

        return;
    }

    if (carte.classList.contains("suspect")) {

        carte.classList.remove("suspect");

        majHypothese(section, null);

        return;
    }

    carte.classList.add("barre");
}

function majHypothese(section, carte) {

    let cible = null;

    if (section === "Personnages") {
        cible = document.getElementById("hypoPersonnage");
    }

    if (section === "Jouets") {
        cible = document.getElementById("hypoJouet");
    }

    if (section === "Heures") {
        cible = document.getElementById("hypoHeure");
    }

    if (!cible) {
        return;
    }

    if (carte === null) {
        cible.innerHTML = "❓";
        return;
    }

    let image = carte.querySelector("img").src;

    cible.innerHTML =
        "<img src='" + image + "' style='width:100px;height:100px;object-fit:contain;'>";
}

function rejouer() {

    if (!confirm("Voulez-vous vraiment recommencer l'enquête ?")) {
        return;
    }

    let cartes = document.querySelectorAll(".card");

    cartes.forEach(carte => {
        carte.classList.remove("barre");
        carte.classList.remove("suspect");
    });

    detectiveNom = "";
    detectiveImage = "";

    document.getElementById("hypoPersonnage").innerHTML = "❓";
    document.getElementById("hypoJouet").innerHTML = "❓";
    document.getElementById("hypoHeure").innerHTML = "❓";

    document.getElementById("jeu").style.display = "none";
    document.getElementById("selection").style.display = "block";

    document.getElementById("btnCommencer").style.display = "none";

    document.getElementById("detectiveChoisi").innerHTML = "";
}
