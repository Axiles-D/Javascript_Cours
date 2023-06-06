// ==========================================
// nombre entre 1 et 3              5.1
// ==========================================

// let nbr = parseInt(prompt("Nombre entre 1 et 3"));

// while (nbr < 1 || nbr > 3) {
//     alert("Nombre incorrect");
//     nbr = prompt("Nombre entre 1 et 3");
// }

// alert(`nombre correcte ${nbr}`)



// ==========================================
// nombre entre 10 et 20            5.2
// ==========================================

// let nbr = prompt("Nombre entre 10 et 20")

// while (nbr < 10 || nbr > 20) {
//     if (nbr < 10) {
//         alert("Plus grand !")
//         nbr = prompt("Nombre entre 10 et 20")
//     } else {
//         alert("Plus petit!")
//         nbr = prompt("Nombre entre 10 et 20")
//     }
// }

// alert(`nombre correcte ${nbr}`)



// ==========================================
// nombre départ + 10 suivants       5.3
// ==========================================

// let nbr = parseInt(
//     prompt("Nombre départ")
// );
// console.log(nbr)

// for (let i = 0; i <= 9; i++) {
//     nbr++
//     console.log(nbr)
// }



// ===========================================
// nombre départ + table multiplication  5.4
// ===========================================

// let nbr = parseInt(
//     prompt("Un nombre stp")
// )

// for (let i = 1; i <= 10; i++) {
//     console.log(`${nbr} x ${i} = ${nbr * i}`)
// }



// =============================================================
// nombre départ + somme des entiers jusqu'à ce nombre    5.5
// =============================================================

// let nbr = parseInt(
//     prompt("Un nombre stp")
// ) 

// let resultat = 0

// for (let i = 1; i <5= nbr; i++) {
//     resultat += i
//     console.log(resultat)
// }



// ==========================================
// nombre départ + factoriel          5.6
// ==========================================

// let nbr = parseInt(
//     prompt("Un nombre stp")
// ) 
// let resultat = 1
// let factoriel = ""

// for (let i = 1; i <= nbr; i++) {
//     resultat *= i
//     factoriel += `${i} `
//     if(i < nbr){
//         factoriel += `x `
//     }
// }

// console.log(`${factoriel} = ${resultat}`)



// ===========================================
// 3 nombres départ => plus grand nombre  5.7
// ===========================================

// alert("Donne moi 3 nombres, je te dirais lequel est le plus grand")
// let verif = 0
// let resultat = ``

// for (let i = 1; i <= 3; i++) {
//     let nbr = parseInt(
//         prompt(`Entrez le nombre numéro ${i}`)
//     )
//     if (nbr > verif) {
//         verif = nbr
//         resultat = `Le plus grand nombre est : ${nbr}, c'était le nombre ${i}`
//     }
// }

// alert(resultat)



// ===========================================
// exo 5.7 avec random number          5.8
// ===========================================

// alert("Donne moi des nombres, je te dirais lequel est le plus grand")
// let verif = 0
// let resultat = ``
// let nbr = 1
// let compteur = 1

// while (nbr != 0){
//     nbr = parseInt(
//         prompt(`Entrez le nombre numéro ${compteur}`)
//     )
//     if (nbr > verif) {
//         verif = nbr
//         resultat = `Le plus grand nombre est : ${nbr}, c'était le nombre ${compteur}`
//     }
//     compteur++
// }

// alert(resultat)



// ===========================================
// calcul achat client                5.9
// ===========================================

// alert("Donne moi le prix de tout tes articles un par un (sans chiffre après la virgule). Entre '0' pour terminer")

// let prix
// let somme = 0


// while (prix != 0) {
//     prix = parseInt(
//         Math.floor(
//             prompt("Prix de ton article")
//             )
//     )
//     somme += prix
// }

// alert(`Tu me dois : ${somme} Euros`)

// let argent = parseInt(
//     Math.floor(
//         prompt("Combien me paye-tu ?")
//         )
// )

// while (argent < somme){
//     argent = parseInt(
//         Math.floor(
//             prompt("Ce n'est pas assez ! Combien me paye-tu réellement ?")
//             )
//     )
// }

// let remise = argent - somme

// alert(`je te rends ${remise} Euros`)

// while (remise >= 10) {
//     remise -= 10
//     alert(`voilà un billet de 10 Euros`)
// }

// while (remise >= 5) {
//     remise -= 5
//     alert(`voilà un billet de 5 Euros`)
// }

// while (remise >= 2) {
//     remise -= 2
//     alert(`voilà une pièce de 2 Euros`)
// }

// while (remise >= 1) {
//     remise -= 1
//     alert(`voilà une pièce de 1 Euros`)
// }

// alert("Voilà ! en vous souhaitant une bonne journée !")



// ======================================================================
// tiercé, quarté, quinté (sans impôts je sais pas ce que c'est)   5.10
// ======================================================================

// let chevauxPartants = parseInt(
//     prompt("Combien de chevaux participent ?")
// )

// let chevauxJoues = parseInt(
//     prompt("Combien de chevaux joues-tu ?")
// )

// let factorielN = 1
// let factorielP = 1
// let factorielNP = 1
// let probaX = 0
// let probaY = 0

// for (let i = 1; i <= chevauxPartants; i++) {
//     factorielN  *= i
// }

// for (let j = 1; j <= (chevauxPartants - chevauxJoues); j++) {
//     factorielNP *= j
// }

// probaX = (factorielN / factorielNP)
// alert(`Dans l'ordre : une chance sur ${probaX} de gagner`)

// factorielN = 1
// factorielP = 1
// factorielNP = 1

// for (let k = 1; k <= chevauxPartants; k++) {
//     factorielN  *= k
// }

// for (let l = 1; l <= chevauxJoues; l++) {
//     factorielP *= l
// }

// for (let m = 1; m <= (chevauxPartants - chevauxJoues); m++) {
//     factorielNP *= m
// }

// probaY = (factorielN / (factorielP * factorielNP))

// alert(`Dans le désordre : une chance sur ${probaY} de gagner`)






console.log("votre valeur est" + variable + " voilà c'est le résultat")
// devient
console.log(`votre valeur est ${variable} voilà c'est le résultat`)