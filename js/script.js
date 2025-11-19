const contadorVisitas = document.getElementById('contadorVisitas')
const btn = document.getElementById('btnReestablecer')

let visitas = Number(parseFloat(localStorage.getItem('contadorVisitas')).toFixed(0)) // hay que montar este cristo porque sino, en casos que queramos cifras redondas, parseFloat nos devolverá con decimales.
//alternativa más corta porque <parseInt(valor, base)> (valor sería->contadorVisitas, base sería->10 porque usamos números del 0 al 9,osea decimal) Nos devuelve numbers: 
//let visitas = parseInt(localStorage.getItem('contadorVisitas', 10)) 

if (!visitas) {
     visitas = 0;
}
else {
visitas = parseFloat(visitas);
}

visitas ++;

contadorVisitas.textContent = visitas

localStorage.setItem('contadorVisitas', visitas)

btn.addEventListener('click', () => {
    localStorage.removeItem('contadorVisitas');
    visitas = 0;
    contadorVisitas.textContent = visitas
})