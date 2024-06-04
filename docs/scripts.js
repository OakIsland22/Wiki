const data = [
    { text: "Introducción", id: "introduccion" },
    { text: "Deportes mas Reconocidos", id: "deportes-mas-reconocidos" },
    { text: "Futbol", id: "FUTBOL" },
    { text: "Natacion", id: "NATACION" },
    { text: "Basquetbol", id: "BASQUETBOL" },
    { text: "Ciclismo", id: "CICLISMO" },
    { text: "Futbol Americano", id: "FUTBOL-AMERICANO" },
    { text: "Importancia del Deporte", id: "importancia-del-deporte" },
];

const mainOptions = [
    { text: "Deportes mas Reconocidos", id: "deportes-mas-reconocidos" },
    { text: "Opción Principal 2", id: "content2" },
    { text: "Opción Principal 3", id: "content3" }
];

const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');

        searchInput.addEventListener('focus', function() {
            showMainOptions();
        });

        searchInput.addEventListener('blur', function() {
            setTimeout(function() {
                resultsContainer.innerHTML = ''; // Ocultar resultados cuando se pierde el foco
            }, 100);
        });

        searchInput.addEventListener('input', function() {
            const query = searchInput.value.toLowerCase();
            resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

            if (query.trim() === '') {
                showMainOptions();
                return; // Mostrar opciones principales si el campo de búsqueda está vacío
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
                        searchInput.value = ''; // Limpiar el campo de búsqueda
                        resultsContainer.innerHTML = ''; // Limpiar resultados
                    });
                    resultItem.appendChild(resultLink);
                    resultList.appendChild(resultItem);
                });
                resultsContainer.appendChild(resultList);
            }
        });

        function showMainOptions() {
            resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
            const resultList = document.createElement('ul');
            mainOptions.forEach((option) => {
                const resultItem = document.createElement('li');
                const resultLink = document.createElement('a');
                resultLink.className = 'result';
                resultLink.textContent = option.text;
                resultLink.href = `#${option.id}`;
                resultLink.tabIndex = -1;
                resultLink.addEventListener('click', () => {
                    searchInput.value = ''; // Limpiar el campo de búsqueda
                    resultsContainer.innerHTML = ''; // Limpiar resultados
                });
                resultItem.appendChild(resultLink);
                resultList.appendChild(resultItem);
            });
            resultsContainer.appendChild(resultList);
        }

        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
            searchInput.blur(); // Quitar el foco del campo de búsqueda
        });


        // Cuando el usuario se desplaza 20px desde la parte superior de la página, muestra el botón
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