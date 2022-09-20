
debugger



const muestroHTML = (nom,ape,dom,cur,car,mat,not)=>{
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector("#apellido")
    const domicilio = document.getElementById("domicilio")
    const curso = document.getElementById("curso")
    const carrera = document.getElementById("carrera")
    const materia = document.getElementById("materia")
    const nota = document.getElementById("nota")
    const mostrarDatos = document.getElementById("mostrarDatos")
    const boton = document.getElementById("boton")


    const datos = [nom,ape,dom,cur,car,mat,not]
    mostrarDatos.innerHTML = datos
    console.log(datos)
}
muestroHTML(nombre,apellido,domicilio,curso,carrera,materia,nota)
boton.addEventListener("click", muestroHTML)