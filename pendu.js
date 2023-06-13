// ================================================================
// Toutes mes variables/constentes

//* Constentes pour mot aléatoire
const tabbleMot = [
    "manga",
    "developpeur",
    "anticonstitutionnellement",
    "kinesitherapeute",
    "ballon",
    "code",
    "grandir",
    "peripateticienne",
];
const motRandom = Math.floor(Math.random() * tabbleMot.length);
const mot = tabbleMot[motRandom];

//* Constentes pour afficher le mot en étoiles
const caracter = mot.split("");
const etoile = [];

//* Constentes qui récupère mes objets html
const guessWord = document.querySelector("#guessWord");
const result = document.querySelector("#result");
const button = document.getElementsByTagName("button");
const usedLetter = document.querySelector("#usedLetter");
const tryAgain = document.querySelector("#recommencer");
const containAgain = document.querySelector("#containAgain");
const pendu = document.querySelector("#pendu");
const devine = document.querySelector(".devine");
const valider = document.querySelector("#valider");
const start = document.querySelector("#start");
const jeu = document.querySelector("#jeu");
const all = document.querySelector("#containAll");

//* Spécial Timer
const progressBar = document.querySelector('.progress-bar');
const secondes = document.querySelector('#secondes');
let progression = 0
let timer = 15
let myIntervalProgress, myIntervalTimer

// let myIntervalProgress = setInterval(progress, 1000 / 60)
// let myIntervalTimer = setInterval(time, 1000)

//* Variables pour la confirmation par écrit
let indices = [];
let idx = caracter.indexOf(devine.value.toLowerCase());

//* Variables victoire/défaite
let iswin = 0;
let islose = 0;

// ================================================================

start.addEventListener("click", function () {
    jeu.style.display = "none"
    all.style.display = "block"
    init()
});

function init(){

    myIntervalProgress = setInterval(progress, 1000 / 60)
    myIntervalTimer = setInterval(time, 1000)

    //* boucle qui affiche les étoiles en fonction de la longueur du mot
    for (let i = 0; i < mot.length; i++) {
        etoile.push("* ");
    }
    guessWord.textContent = etoile.join("");

    //* Vérification
    console.log(mot);
    console.log(etoile);
    console.log(caracter);

    //* Fonction de défaite
    function lose() {
        //================================================================
        //* Section avancement du pendu + défaite
        if (islose == 1) {
            pendu.style.backgroundPosition = "14.3% 50%";
        }
        if (islose == 2) {
            pendu.style.backgroundPosition = "28.6% 50%";
        }
        if (islose == 3) {
            pendu.style.backgroundPosition = "42.9% 50%";
        }
        if (islose == 4) {
            pendu.style.backgroundPosition = "57.1% 50%";
        }
        if (islose == 5) {
            pendu.style.backgroundPosition = "71.4% 50%";
        }
        if (islose == 6) {
            pendu.style.backgroundPosition = "85.7% 50%";
        }
        if (islose == 7) {
            // Vérification d'une possible défaite
            result.innerHTML = `<p>Vous avez perdu !</p>`;
            pendu.style.backgroundPosition = "100% 50%";

            devine.disabled = true;
            valider.disabled = true;
            for (let j = 0; j < button.length; j++) {
                // Boucle pour désactiver les boutons
                button[j].disabled = true;
            }
            containAgain.style.display = "flex"; // On fait apparaître le bouton recommencer

            clearInterval(myIntervalProgress);
            clearInterval(myIntervalTimer); // On désactive timer et progress bar
        }
        //================================================================
    }

    //* Boucle qui analyse le bouton pressé
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {

            let analyse = 0;
            caracter.forEach(function (lettre, index) {

                if (lettre === button[i].textContent.toLowerCase()) {
                    // remplacer l'étoile par la lettre qui correspond
                    guessWord.textContent = etoile.join(" ");
                    etoile[index] = lettre;
                    guessWord.textContent = etoile.join(" ");

                    iswin++;

                    progression = 0
                    progressBar.value = 0
                    timer = 16

                } else {
                    analyse++; // Ici la variable "analyse" permet d'utiliser le "isLose" malgrès le "forEach" en vérifiant si le bouton pressé correspond à au moins un caractère du mot
                    if (analyse == caracter.length) {
                        islose++;

                        progression = 0
                        progressBar.value = 0
                        timer = 16
                    }
                }

                if (iswin == mot.length) {
                    // Vérification d'une possible victoire
                    result.innerHTML = `<p>Vous avez gagné !</p>`;

                    devine.disabled = true;
                    valider.disabled = true;
                    for (let j = 0; j < button.length; j++) {
                        // Boucle pour désactiver les boutons
                        button[j].disabled = true;
                    }
                    containAgain.style.display = "flex"; // On fait apparaître le bouton recommencer

                    clearInterval(myIntervalProgress);
                    clearInterval(myIntervalTimer); // On désactive timer et progress bar
                }
            });

            lose();

            button[i].disabled = true; // Le bouton déjà pressé est désactivé.

            usedLetter.textContent += `${button[i].textContent} `; // Lettre rajouté dans les lettres déjà utilisés
        });
    }

    //* Fonction qui analyse la lettre rentré
    function action() {
        if (caracter.includes(devine.value.toLowerCase())) {
            caracter.forEach(function (lettre, index) {

                if (lettre === devine.value.toLowerCase()) {
                    // remplacer l'étoile par la lettre qui correspond

                    guessWord.textContent = etoile.join(" ");
                    etoile[index] = lettre;
                    guessWord.textContent = etoile.join(" ");

                    iswin++;

                    progression = 0
                    progressBar.value = 0
                    timer = 16
                }

                if (iswin == mot.length) {
                    // Vérification d'une possible victoire
                    result.innerHTML = `<p>Vous avez gagné !</p>`;

                    devine.disabled = true;
                    valider.disabled = true;
                    for (let j = 0; j < button.length; j++) {
                        // Boucle pour désactiver les boutons
                        button[j].disabled = true;
                    }
                    containAgain.style.display = "flex"; // On fait apparaître le bouton recommencer

                    clearInterval(myIntervalProgress);
                    clearInterval(myIntervalTimer); // On désactive timer et progress bar
                }
            });

        } else {
            islose++;
            lose();
            progression = 0
            progressBar.value = 0
            timer = 16
        }
        usedLetter.textContent += `${devine.value.toUpperCase()} `; // Lettre rajouté dans les lettres déjà utilisés

        for (let i = 0; i < button.length; i++) {
            if (devine.value.toLowerCase() === button[i].textContent.toLowerCase()) {
                button[i].disabled = true;
            }
        }
        devine.value = ""; // Vider l'input texte
    }



    //* Action du click ou du "enter"
    devine.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            action();
        }
    });

    valider.addEventListener("click", function () {
        action();
    });

    //* Bouton recommencer
    tryAgain.addEventListener("click", function () {
        window.location.reload();
    });

    function lerp(start, end, delta) {
        return (1 - delta) * start + delta * end;
    }

    function progress() {
        progression++
        progressBar.value = lerp(progressBar.value, progression, 0.1);

        if (progressBar.value == 990) {
            progression = 0
            progressBar.value = 0
        }


    }
    idInterval = myIntervalProgress

    function time() {
        timer--;
        secondes.textContent = `00 : ${timer}`

        if (timer % 2 == 0) {
            secondes.style.color = "red";
        }

        // if the number is odd
        else {
            secondes.style.color = "white";
        }

        if (timer == 0) {
            islose++
            timer = 16;
        }

        lose();
    }

    secondes.textContent = `00 : ${timer}`

}