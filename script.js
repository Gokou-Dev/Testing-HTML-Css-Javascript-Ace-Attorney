function triggerObjection() {
  const phoenix = document.getElementById("phoenix");
  const objection = document.getElementById("objection");
  const sound = document.getElementById("objection-sound");

  // Troca a pose de Phoenix
  phoenix.src = "phoenix_objection.gif";

  // Toca o som
  sound.currentTime = 0;
  sound.play();

  // Mostra o Objection!
  objection.classList.add("show");

  // Depois de 1 segundo, volta à pose normal e para tudo
  setTimeout(() => {
    phoenix.src = "phoenix_normal.gif";
    objection.classList.remove("show");
    sound.pause();
    sound.currentTime = 0;
  }, 1000);
}