const button = document.getElementsByTagName('button');
const tabbleMot = ["manga", "developpeur", "anticonstitutionnellement", "kinesitherapeute", "ballon", "code", "grandir", "peripateticienne"]
const motRandom = Math.floor(Math.random() * tabbleMot.length);
const mot = tabbleMot[motRandom];
const caracter = mot.split("");
const etoile = [""];
const guessWord = document.querySelector("#guessWord");
let iswin = 0
let islose = 0


console.log(mot);

//boucle qui affiche les étoiles en fonction de la longueur du mot
for (let i = 0; i < mot.length; i++) {
    etoile[0] += "* "
}

console.log(etoile);

console.log(caracter);

guessWord.textContent = `${etoile}`;


// Fonction qui analyse la réponse donnée

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        if (caracter.includes(button[i].textContent.toLowerCase())) {
            // remplacer l'étoile par la lettre qui correspond
            if (iswin == mot.length) {
                // Condition de victoire
            }
        } else {
            islose++;
        }
        if (islose == 7) {
            //Condition de perdu
        }
    button[i].disabled = true;
    });
}

