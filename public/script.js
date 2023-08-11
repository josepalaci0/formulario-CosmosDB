
    document.addEventListener("DOMContentLoaded", function () {
      const proyectosHeaders = document.querySelectorAll(".display");
      proyectosHeaders.forEach(proyectosHeader => {
        proyectosHeader.addEventListener("click", function () {
          const hiddenContent = proyectosHeader.nextElementSibling;
          hiddenContent.style.display = (hiddenContent.style.display === "none" || hiddenContent.style.display === "") ? "block" : "none";
        });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const proyectosHeaders = document.querySelectorAll(".display-comment");

      proyectosHeaders.forEach(proyectosHeader => {
        proyectosHeader.addEventListener("click", function () {
          const hiddenContent = proyectosHeader.nextElementSibling;
          const userResponse = confirm("¿Quieres agregar o eliminar un comentario?");
          if (userResponse) {
            hiddenContent.style.display = (hiddenContent.style.display === "none" || hiddenContent.style.display === "") ? "block" : "none";
            proyectosHeader.textContent = hiddenContent.style.display === "none" ? "Agregar comentario [+]" : "Eliminar comentario [-]";
            proyectosHeader.classList.toggle("clicked");
          }
        });
      });
    });

    const boxContainer = document.querySelector('.box-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let scrollAmount = 0;
    const boxWidth = 320;

    nextButton.addEventListener('click', () => {
      if (scrollAmount < boxContainer.scrollWidth - boxContainer.clientWidth) {
        scrollAmount += boxWidth;
        boxContainer.scrollLeft = scrollAmount;
      }
    });

    prevButton.addEventListener('click', () => {
      if (scrollAmount > 0) {
        scrollAmount -= boxWidth;
        boxContainer.scrollLeft = scrollAmount;
      }
    });



    // Asegura que el contenido de los párrafos sea responsive
    const responsiveTexts = document.querySelectorAll('.responsive-text');

    responsiveTexts.forEach(text => {
      const originalText = text.textContent;
      text.addEventListener('click', function () {
        if (text.classList.contains('expanded')) {
          text.textContent = originalText;
          text.classList.remove('expanded');
        } else {
          text.textContent = originalText;
          text.classList.add('expanded');
        }
      });
    });



    document.getElementById('contact-form').addEventListener('submit', async (event) => {

      const formData = new FormData(event.target);
      const response = await fetch('/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result); // Puedes mostrar la respuesta en la consola o en algún elemento HTML
    });
