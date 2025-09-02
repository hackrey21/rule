function obtenerPregunta(tipo, categoria, lista) {
  const claveStorage = tipo === "verdad" ? "usadas_verdades" : "usadas_retos";
  const usadas = JSON.parse(localStorage.getItem(claveStorage)) || [];

  // Obtener las opciones según tipo y categoría
  const opciones = lista[categoria][tipo === "verdad" ? "preguntas" : "retos"];

  // Filtrar las que ya se usaron
  const disponibles = opciones.filter((_, i) => !usadas.includes(i));

  if (disponibles.length === 0) {
    alert("¡Ya no hay más " + tipo + "s en esta categoría!");
    localStorage.removeItem(claveStorage); // Reinicia si se agotan
    location.reload();
    return;
  }

  const randomIndex = Math.floor(Math.random() * disponibles.length);

  // Guardar la usada
  usadas.push(randomIndex);
  localStorage.setItem(claveStorage, JSON.stringify(usadas));

  return disponibles[randomIndex];
}

function mostrarPregunta(lista) {
  const btnGirar = document.getElementById("girar");
  const salida = document.getElementById("resultado");
  const btnHecho = document.getElementById("hechoBtn");

  btnGirar.addEventListener("click", () => {
    const tipo = document.getElementById("tipo").value;          // verdad o reto
    const categoria = document.getElementById("categoria").value; // categoría seleccionada

    btnGirar.disabled = true;
    btnHecho.style.display = "none";  
    salida.textContent = "Girando...";

    setTimeout(() => {
      const pregunta = obtenerPregunta(tipo, categoria, lista);
      if (pregunta) {
        salida.textContent = pregunta;
      }
      btnGirar.disabled = false;
      btnHecho.style.display = "inline-block"; 
    }, 2000);
  });
}
