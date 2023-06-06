// ============================================
//              Exercice 6.1
// ============================================

// let table = [0, 0, 0, 0, 0, 0, 0]
// console.log(table)




// ============================================
//              Exercice 6.2
// ============================================

// let table = ["a", "e", "i", "o", "u", "y"]
// console.log(table)




// ============================================
//              Exercice 6.3
// ============================================

// let table = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// for (let i = 0; i < table.length; i++) {
//     table[i] = prompt(`Entrez la note n°${i+1}`)
// }

// console.log(table)




// ============================================
//              Exercice 6.4
// ============================================

// let table = [0, 0, 0, 0, 0]

// for (let i = 0; i <= 5; i++) {
//     table[i] = (i * i)
//     console.log(table[i])
// }


// Plus simplement on peut soit sortir le console.log(table) de la boucle pour qu'il nous affiche tout les résultats d'un coup.
// Ou alors on peut utiliser une variable quelquonc en gardant le console.log(variable) pour avoir le même résultat.





// ============================================
//              Exercice 6.5
// ============================================

// let table = [1, 0, 0, 0, 0, 0]

// for (let k = 1; k <= 6; k++) {
//     table[k] = table[k-1] + 2
// }

// for (let i = 0; i < 6; i++) {
//     console.log(table[i])
// }


// Plus simple :

// let table = [1, 0, 0, 0, 0, 0]

// for (let k = 1, i = 0; k <= 6, i < 6; k++, i++) {
//     table[k] = table[k-1] + 2
//     console.log(table[i])
// }




// ============================================
//              Exercice 6.6
// ============================================

// let table = [1, 1, 0, 0, 0, 0, 0]

// for (let i = 2; i <= 7; i++) {
//     table[i] = table[i-1] + table[i-2]
// }

// for (let j = 0; j <= 7; j++) {
//     console.log(table[j])
// }




// ============================================
//              Exercice 6.7
// ============================================

// let table = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// for (let i = 0; i < table.length; i++) {
//     table[i] = parseInt(prompt(`Entrez la note n°${i+1}`))
// }
// // *optionnel* let moyenne = (table[0] + table[1] + table[2] + table[3] + table[4] + table[5] + table[6] + table[7] + table[8]) / 9
// console.log(`Ta moyenne est : ${((table[0] + table[1] + table[2] + table[3] + table[4] + table[5] + table[6] + table[7] + table[8]) / 9)}`) 