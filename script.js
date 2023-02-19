const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
console.log(h1);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Hola <br> Genio :)';
//element.innerHTML nos permite cambiar o agregar código html desde JS en el ejemplo de arriba podemos ver como cambiamos el elemento h1 por hola (salto de línea) feo
 h1.setAttribute('class', 'rojo');
 // element.setAttribute nos permite cambiar o agreagar el valor de una clase. De un elemento HTML desde JS.

 const img = document.createElement('img');
 img.setAttribute('src', 'https://www.emerisis.com/media/Hacker-scaled.jpeg');

 console.log(img);
  
pid.append(img);