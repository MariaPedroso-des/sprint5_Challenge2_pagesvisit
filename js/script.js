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

//solución DATA
// localStorage.getItem
// localStorage.setItem

const btnReestablecer = document.getElementById("btnReestablecer")
const contadorVisitas = document.getElementById("contadorVisitas")

// Capturar el botón de restablecer "btnReestablecer" y el lugar donde va el número del contador "contadorVisitas"
// Acceder al dato que está en el localStorage
// Cambiar el dato del local storage
// poner el dato en la pantalla
// FUNCIONE TODO



const getCount = parseInt(localStorage.getItem("visitCount")) || 0 
const setCount = () => localStorage.setItem("visitCount", countVisit) // declaración de función y no se autoejecuta

let countVisit = getCount

const updateVisit = () => {
  setCount() // Aquí es donde se ejecuta (invoca)
  contadorVisitas.textContent = countVisit
}

countVisit++
updateVisit() // Este es el inicio de mi ejecución total

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem("visitCount", 0)
  contadorVisitas.textContent = localStorage.getItem("visitCount")
})


// Obtenemos el dato del localStore 0
// updateVisit() -> ejecutamos la función
// setCount -> cambia el valor del localStorage("visitCount")
// garda ese valor dentro del localstorage("visitCount") -> donde antes valía 0 ahora vale 1
// RECARGO
// Obtenemos el dato del localStore 1