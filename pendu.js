// ================================================================
// Toutes mes variables/constentes

//* Constentes pour mot aléatoire
const tabbleMot = ["manga", "developpeur", "anticonstitutionnellement", "kinesitherapeute", "ballon", "code", "grandir", "peripateticienne"]
const motRandom = Math.floor(Math.random() * tabbleMot.length);
const mot = tabbleMot[motRandom];

//* Constentes pour afficher le mot en étoiles
const caracter = mot.split("");
const etoile = [];

//* Constentes qui récupère mes objets html
const guessWord = document.querySelector("#guessWord");
const result = document.querySelector("#result")
const button = document.getElementsByTagName('button');
const usedLetter = document.querySelector("#usedLetter")
const tryAgain = document.querySelector("#recommencer");
const containAgain = document.querySelector("#containAgain")
const pendu = document.querySelector("#pendu");

//* Variables victoire/défaite
let iswin = 0
let islose = 0

// ================================================================


//* boucle qui affiche les étoiles en fonction de la longueur du mot
for (let i = 0; i < mot.length; i++) {
    etoile.push("* ")
}
guessWord.textContent = etoile.join("");


//* Vérification
console.log(mot);
console.log(etoile);
console.log(caracter);


//* Boucle qui analyse le bouton pressé
for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", function () {

        let analyse = 0
        caracter.forEach(function (lettre, index) {

            if (lettre === button[i].textContent.toLowerCase()) {

                // remplacer l'étoile par la lettre qui correspond
                guessWord.textContent = etoile.join(" ");
                etoile[index] = lettre;
                guessWord.textContent = etoile.join(" ");

                iswin++;

            } else {
                analyse++; // Ici la variable "analyse" permet d'utiliser le "isLose" malgrès le "forEach" en vérifiant si le bouton pressé correspond à au moins un caractère du mot
                if (analyse == caracter.length) {
                    islose++;
                }
            }

            if (iswin == mot.length) { // Vérification d'une possible victoire
                result.innerHTML = `<p>Vous avez gagné !</p>`;

                for (let j = 0; j < button.length; j++) {
                    button[j].disabled = true;
                }
                containAgain.style.display = "flex"; // On fait apparaître le bouton recommencer
            }
        });

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
        if (islose == 7) { // Vérification d'une possible défaite
            result.innerHTML = `<p>Vous avez perdu !</p>`;
            pendu.style.backgroundPosition = "100% 50%";
            for (let j = 0; j < button.length; j++) {
                button[j].disabled = true;
            }
        containAgain.style.display = "flex"; // On fait apparaître le bouton recommencer
        }
        //================================================================

        button[i].disabled = true; // Le bouton déjà pressé est désactivé.

        usedLetter.textContent += `${button[i].textContent} `; // Lettre rajouté dans les lettres déjà utilisés
    })
};

tryAgain.addEventListener('click', function () {
    window.location.reload();
});