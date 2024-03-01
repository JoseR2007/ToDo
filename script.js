const btnAgregar = document.getElementById('agregar');
const tareaInput = document.getElementById('tarea');
const tabla = document.getElementById('tareas');

btnAgregar.addEventListener("click", ()=>{
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
    
  h2.append(tareaInput.value);
  article.appendChild(h2);
  tabla.appendChild(article);
})