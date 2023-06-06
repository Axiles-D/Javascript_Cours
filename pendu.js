const button = document.getElementsByTagName('button');
const tabbleMot = ["manga", "developpeur", "anticonstitutionnellement", "kinesitherapeute", "ballon", "code", "grandir", "peripateticienne"]
const motRandom = Math.floor(Math.random() * tabbleMot.length);
const mot = [tabbleMot[motRandom]];
const etoile = [""];
const guessWord = document.querySelector("#guessWord");

console.log(mot);
for (let i = 0; i < mot[0].length; i++) {
    etoile[0] += "* "
}
console.log(etoile);
guessWord.textContent = `${etoile}`;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        if (button[i] // créer un tableau avec toutes les lettres de l'alphabet pour comparer avec le contenu des mots à guess
    button[i].disabled = true;
    });
}

