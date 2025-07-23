function obtenerPregunta(tipo, lista) {
  const claveStorage = tipo === "verdad" ? "usadas_verdades" : "usadas_retos";
  const usadas = JSON.parse(localStorage.getItem(claveStorage)) || [];
  const disponibles = lista.filter((_, i) => !usadas.includes(i));

  if (disponibles.length === 0) {
    alert("¡Ya no hay más " + tipo + "s!");
    localStorage.removeItem(claveStorage); // Reinicia si se agotan
    location.reload();
    return;
  }

  const randomIndex = Math.floor(Math.random() * disponibles.length);
  const indexOriginal = lista.indexOf(disponibles[randomIndex]);

  usadas.push(indexOriginal);
  localStorage.setItem(claveStorage, JSON.stringify(usadas));

  return disponibles[randomIndex];
}

function mostrarPregunta(tipo, lista) {
  const btnGirar = document.getElementById("girar");
  const salida = document.getElementById("resultado");
  const btnHecho = document.getElementById("hechoBtn");

  btnGirar.addEventListener("click", () => {
    btnGirar.disabled = true;
    btnHecho.style.display = "none";  // ocultar el botón hecho mientras gira
    salida.textContent = "Girando...";

    setTimeout(() => {
      const pregunta = obtenerPregunta(tipo, lista);
      salida.textContent = pregunta;
      btnGirar.disabled = false;
      btnHecho.style.display = "inline-block"; // mostrar el botón hecho cuando haya resultado
    }, 2000);
  });
}
