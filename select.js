// const seletorCores = document.querySelector('#coloridos');
// const btnTrocaCor = document.querySelector('#btn--cor');
// const elementoH1 = document.querySelector('body');

// console.log(seletorCores);
// console.log(btnTrocaCor);
// console.log(elementoH1);
// console.log(seletorCores.value);


// btnTrocaCor.addEventListener('click', trocarCor);

// function trocarCor() {
//     let corSelecionada = seletorCores.value;
//     if (corSelecionada === 'vermelho') {
//         elementoH1.style.color = `red`;
//     }
//         else if (corSelecionada === 'ciano') {
//             elementoH1.style.color = `cyan`;

//     }   else if (corSelecionada === 'preto') {
//             elementoH1.style.color = `grey`;

//     }   else if (corSelecionada === 'verde') {
//             elementoH1.style.color = `lightgreen`;

//     }   else if (corSelecionada === 'azul') {
//             elementoH1.style.color = `blue`
//     }

// }



const seletorCores = document.querySelector('#icolorido');
const btnTrocaCor = document.querySelector('#btn--cor2');
const elementoH1 = document.querySelector('h1');

btnTrocaCor.addEventListener('click', trocarCor);

function trocarCor() {
    let corSelecionada = seletorCores.value;
    elementoH1.style.color = corSelecionada
}