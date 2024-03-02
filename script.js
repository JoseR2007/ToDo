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
  const p = document.createElement('p');
    
  h2.append(tareaInput.value);
  p.append(obtenerHora());
  article.appendChild(h2);
  article.appendChild(p);
  article.classList.add('clasTarea');
  tabla.appendChild(article);
  tareaInput.value = " ";

  article.addEventListener("dblclick", ()=>{
    tabla.removeChild(article);
  })
  article.addEventListener("click", ()=>{
    article.classList.add('complete');
  })
})

const comprobarLong = () => {
  const arrayInput = tareaInput.value.split("");
  if (arrayInput.length <= 1) {
    return false;
  } 
  return true;
}

const obtenerHora = () => {
  const date = new Date;
  if (date.getMinutes() < 12) {
    const hora = `${date.getHours()}:${date.getMinutes()}AM`;
  }
  const hora = `${date.getHours()}:${date.getMinutes()}PM`;
  return hora
}