const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#resultado');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "Resultado " + sumaInputs;
};