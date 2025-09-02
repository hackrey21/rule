shotBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * shots.length);
  const instruccion = shots[randomIndex];
  alert(`¡Shot Time! 🥃\n${instruccion}`);
  location.reload();
});
