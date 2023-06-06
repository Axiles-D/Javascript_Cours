const alertParagraph = document.querySelector('p');
console.log(alertParagraph);

alertParagraph.addEventListener('click', function (){
    console.log("Tu m'as cliqué dessus")
})

const buttonPara = document.querySelector('.paragraphe');
const result = document.querySelector('#result');



result.setAttribute("style","font-style : italic");

buttonPara.addEventListener('click', function (){
    const newP = document.createElement('p');
    newP.textContent = "Hop un paragraphe nouvellement inséré !"
    result.insertAdjacentElement('afterbegin', newP)
})