const data = [
    { text: "Introducción", id: "introduccion" },
    { text: "Deportes mas Reconocidos", id: "deportes-mas-reconocidos" },
    { text: "Importancia del Deporte", id: "importancia-del-deporte" },
    { text: "Historia del Deporte.", id: "historia" },
    { text: "El Deporte en la Actualidad", id: "el-deporte-en-la-actualidad" },
    { text: "Valores y Ética en el Deporte", id: "valores" },
    { text: "Impacto Cultural y Social del Deporte", id: "impacto" },
    { text: "Futbol Americano", id: "FUTBOL-AMERICANO" },
    { text: "El Futuro del Deporte", id: "futuro" },
    { text: "Sigueme", id: "sigueme" },
    { text: "Juegos", id: "juegos" },
    { text: "Empresa", id: "empresa" },
];

const mainOptions = [
    { text: "Deportes mas Reconocidos", id: "deportes-mas-reconocidos" },
    { text: "Importancia del Deporte", id: "importancia-del-deporte" },
    { text: "El Deporte en la Actualidad", id: "el-deporte-en-la-actualidad" },
    { text: "Valores y Ética en el Deporte", id: "valores" },
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