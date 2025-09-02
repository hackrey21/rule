function mostrarPoseRandom() {
    // Escoge una pose al azar
    const pose = kamasutraPoses[Math.floor(Math.random() * kamasutraPoses.length)];

    // Puedes usar alert() simple
    alert(`${pose.nombre}\n\n${pose.descripcion}`);

    // O crear un pop-up más estilizado en HTML
    // const popup = document.createElement('div');
    // popup.innerHTML = `<h2>${pose.nombre}</h2><p>${pose.descripcion}</p>`;
    // popup.style.position = 'fixed';
    // popup.style.top = '50%';
    // popup.style.left = '50%';
    // popup.style.transform = 'translate(-50%, -50%)';
    // popup.style.backgroundColor = 'white';
    // popup.style.padding = '20px';
    // popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    // popup.style.zIndex = 1000;
    // document.body.appendChild(popup);
    // setTimeout(() => document.body.removeChild(popup), 5000); // desaparece en 5 segundos
}
