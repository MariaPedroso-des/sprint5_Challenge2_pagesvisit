const contadorVisitas = document.getElementById('contadorVisitas')
const btn = document.getElementById('btnReestablecer')

let visitas = localStorage.getItem('contadorVisitas')

if (!visitas) {
     visitas = 0;
}
else {
visitas = parseInt(visitas, 10);
}

visitas ++;

contadorVisitas.textContent = visitas

localStorage.setItem('contadorVisitas', visitas)

btn.addEventListener('click', () => {
    localStorage.removeItem('contadorVisitas');
    visitas = 0;
    contadorVisitas.textContent = visitas
})