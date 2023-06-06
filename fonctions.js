// =================================================================
//                           11.1
// =================================================================

// function somme(nbr, nbr2, nbr3, nbr4, nbr5) {
//     return nbr + nbr2 + nbr3 + nbr4 + nbr5
// }
// console.log(somme(1, 2, 3, 4, 5))




// =================================================================
//                           11.2
// =================================================================

const voyelles = ["a", "e", "i", "o", "u", "y"]

function combienDeVoyelles(text) {
    let compteur = 0

    for (let lettre of text.toLowerCase()) {
        if (voyelles.includes(lettre)) {
            compteur++
        }
    }

    console.log(`Le texte contient ${compteur} voyelle(s)`)

    //* return compteur
}

console.log(combienDeVoyelles(prompt("Entrez votre texte pour connaître son nb de voyelle : ")))




// =================================================================
//                           11.3
// =================================================================