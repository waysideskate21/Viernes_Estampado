const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector(".carruseles"),
  sliderSection = document.querySelectorAll(".slider-section"),
  heartContainers = document.querySelectorAll(".icon_card"); // Asegúrate de que coincida con tu HTML

let counter = 0;
let widthImg = sliderSection[0].clientWidth; // Calculamos el ancho de la primera imagen

// Actualizamos el ancho cada vez que la ventana cambia de tamaño
window.addEventListener("resize", () => {
  widthImg = sliderSection[0].clientWidth;
});

btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

// Desplazar imágenes automáticamente cada 6 segundos
setInterval(() => {
  moveToRight();
}, 6000);

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    slider.style.transform = `translateX(0)`;
    slider.style.transition = "none"; // Sin animación cuando resetea al inicio
  } else {
    counter++;
    slider.style.transform = `translateX(-${counter * widthImg}px)`;
    slider.style.transition = "transform 0.6s ease-in-out"; // Animación suave
  }
}

function moveToLeft() {
  if (counter <= 0) {
    counter = sliderSection.length - 1;
    slider.style.transform = `translateX(-${counter * widthImg}px)`;
    slider.style.transition = "none"; // Sin animación cuando resetea al final
  } else {
    counter--;
    slider.style.transform = `translateX(-${counter * widthImg}px)`;
    slider.style.transition = "transform 0.6s ease-in-out"; // Animación suave
  }
}

// Manejar corazones
heartContainers.forEach(container => {
  const heartEmpty = container.querySelector('.corazon-vacio');
  const heartFull = container.querySelector('.corazon-lleno');

  // Aseguramos que el corazón vacío esté visible y el lleno oculto al iniciar
  heartEmpty.style.display = 'inline';
  heartFull.style.display = 'none';

  // Añadir evento de clic al corazón vacío
  heartEmpty.addEventListener('click', function() {
    heartEmpty.style.display = 'none'; // Ocultar el corazón vacío
    heartFull.style.display = 'inline'; // Mostrar el corazón lleno
  });

  // Añadir evento de clic al corazón lleno para revertir el cambio
  heartFull.addEventListener('click', function() {
    heartFull.style.display = 'none';
    heartEmpty.style.display = 'inline'; // Mostrar el corazón vacío
  });
});