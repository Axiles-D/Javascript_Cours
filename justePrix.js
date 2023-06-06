const devine = document.querySelector(".devine");
const result = document.querySelector("#result");
const tryAgain = document.querySelector("#tryAgain");
const nbrRandom = Math.floor(Math.random() * 101);
const prix = ["Mon respect", "Un bisou", "une Tesla ! (modèle réduit)", "Le droit de rejouer", "Une chaussure Addadas", "Ah désolé on m'appelle, une prochaine fois pour le prix", "Une bouteille d'eau, vide ?"];
const randomPrice = Math.floor(Math.random() * prix.length);
const valider = document.querySelector("#valider");
const container = document.querySelector(".container");
let compteur = 7;

console.log(nbrRandom);

function action() {

    if (devine.value > nbrRandom) {
        container.style.backgroundColor = "cornflowerblue";
        result.innerHTML = "<p>Plus petit !</p>";
        compteur--;
        result.innerHTML += `<p>il vous reste ${compteur} essaie(s)</p>`;
        if ((devine.value - nbrRandom < 10) && (devine.value - nbrRandom > -10)) {
            container.style.backgroundColor = "orange";
            result.innerHTML += "<p>Vous y êtes presque !</p>"
        }
        devine.value = "";
    } else if (devine.value < nbrRandom) {
        container.style.backgroundColor = "cornflowerblue";
        result.innerHTML = "<p>Plus grand !</p>";
        compteur--;
        result.innerHTML += `<p>il vous reste ${compteur} essaie(s)</p>`;
        if ((devine.value - nbrRandom < 10) && (devine.value - nbrRandom > -10)) {
            container.style.backgroundColor = "orange";
            result.innerHTML += "<p>Vous y êtes presque !</p>"
        }
        devine.value = "";
    } else {
        result.innerHTML = "<p>Vous avez gagné !</p>";
        result.innerHTML += `<p>Votre prix est : ${prix[randomPrice]}</p>`
        devine.disabled = true
        container.style.backgroundColor = "green";
    }
    if (compteur === 0) {
        result.innerHTML = "<p>Vous avez Perdu !</p>"
        devine.disabled = true
        container.style.backgroundColor = "red"
        valider.disabled = true
    }
}

devine.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        action();
    }
});

valider.addEventListener('click', function () {
    action();
});

tryAgain.addEventListener('click', function () {
    window.location.reload();
});