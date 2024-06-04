const data = [
  { text: "Historia del Fútbol Americano.", id: "historia" },
  { text: "Reglas Fundamentales.", id: "reglas" },
  { text: "Ligas Importantes.", id: "ligas" },
  { text: "Jugadores Destacados.", id: "jugadores" },
  { text: "Equipos Destacados.", id: "equipos" },
  { text: "Eventos Emblemáticos.", id: "eventos" },
  { text: "Conclusión", id: "conclucion" },
];

const mainOptions = [
  { text: "Historia del Fútbol Americano.", id: "historia" },
  { text: "Reglas Fundamentales.", id: "reglas" },
  { text: "Ligas Importantes.", id: "ligas" },
];

const searchInput = document.getElementById('searchInput');
      const resultsContainer = document.getElementById('results');
      let lastQuery = '';

      searchInput.addEventListener('focus', function() {
          showMainOptions();
      });

      searchInput.addEventListener('blur', function() {
          setTimeout(function() {
              resultsContainer.innerHTML = ''; /* Ocultar resultados cuando se pierde el foco */
          }, 100);
      });

      searchInput.addEventListener('input', function() {
          const query = searchInput.value.toLowerCase();
          resultsContainer.innerHTML = ''; /* Limpiar resultados anteriores */

          if (query.trim() === '') {
              showMainOptions();
              return; /* Mostrar opciones principales si el campo de búsqueda está vacío */
          }

          const filteredResults = data.filter(item => item.text.toLowerCase().includes(query));

          if (filteredResults.length === 0) {
              resultsContainer.innerHTML = '<div class="result">No se encontraron resultados</div>';
          } else {
              const resultList = document.createElement('ul');
              filteredResults.forEach((result) => {
                  const resultItem = document.createElement('li');
                  const resultLink = document.createElement('a');
                  resultLink.className = 'result';
                  resultLink.textContent = result.text;
                  resultLink.href = `#${result.id}`;
                  resultLink.tabIndex = -1;
                  resultLink.addEventListener('click', () => {
                      searchInput.value = ''; /* Limpiar el campo de búsqueda */
                      resultsContainer.innerHTML = ''; /* Limpiar resultados */
                  });
                  resultItem.appendChild(resultLink);
                  resultList.appendChild(resultItem);
              });
              resultsContainer.appendChild(resultList);
          }
      });

      function showMainOptions() {
          resultsContainer.innerHTML = ''; /* Limpiar resultados anteriores */
          const resultList = document.createElement('ul');
          mainOptions.forEach((option) => {
              const resultItem = document.createElement('li');
              const resultLink = document.createElement('a');
              resultLink.className = 'result';
              resultLink.textContent = option.text;
              resultLink.href = `#${option.id}`;
              resultLink.tabIndex = -1;
              resultLink.addEventListener('click', () => {
                  searchInput.value = ''; /* Limpiar el campo de búsqueda */
                  resultsContainer.innerHTML = ''; /* Limpiar resultados */
              });
              resultItem.appendChild(resultLink);
              resultList.appendChild(resultItem);
          });
          resultsContainer.appendChild(resultList);
      }

      document.getElementById('searchForm').addEventListener('submit', function(event) {
          event.preventDefault(); /* Evita el envío del formulario */
          searchInput.blur(); /* Quitar el foco del campo de búsqueda */
          lastQuery = searchInput.value; /* Guardar el valor actual del campo de búsqueda */
          searchInput.value = ''; /* Limpiar el campo de búsqueda */
      });

      searchInput.addEventListener('focus', function() {
          if (searchInput.value !== lastQuery) {
              searchInput.value = ''; /* Limpiar el campo de búsqueda si se escribe algo nuevo */
          }
      });


/* Mostrar inicio para regresar */
      window.onscroll = function() {
          scrollFunction();
      };

      function scrollFunction() {
          const scrollBtn = document.getElementById("scrollBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              scrollBtn.style.display = "block";
          } else {
              scrollBtn.style.display = "none";
          }
      }

/* NavBar ocultar*/
let lastScrollTop = 0;
      window.addEventListener("scroll", function() {
          const navbar = document.getElementById("navbar");
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
              // Desplazarse hacia abajo
              navbar.style.top = "-120px"; 
          } else {
              // Desplazarse hacia arriba
              navbar.style.top = "0";
          }
          lastScrollTop = scrollTop;
      });