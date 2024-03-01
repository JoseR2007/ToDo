const btnAgregar = document.getElementById('agregar');
const tareaInput = document.getElementById('tarea');
const tabla = document.getElementById('tareas');

btnAgregar.addEventListener("click", ()=>{
  if (comprobarLong() === false) {
    console.error('Aun no has escrito nada');
    return;
  }
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
    
  h2.append(tareaInput.value);
  article.appendChild(h2);
  article.classList.add('clasTarea');
  tabla.appendChild(article);
  tareaInput.value = " ";
})

const comprobarLong = () => {
  const arrayInput = tareaInput.value.split("");
  if (arrayInput.length <= 1) {
    return false;
  } 
  return true;
}