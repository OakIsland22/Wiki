const data = [
    { text: "Introducción", id: "introduccion" },
    { text: "Deportes mas Reconocidos", id: "deportes-mas-reconocidos" },
    { text: "Contribuye a un mundo más inclusivo", id: "content3" },
    { text: "Promueve la paz y la comprensión", id: "content4" },
    { text: "Es una actividad recreativa y saludable", id: "content5" }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('focus', function() {
    searchInput.value = ''; // Borrar el campo de búsqueda cuando el usuario hace clic en él
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
});

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (query.trim() === '') {
        return; // No hacer nada si el campo de búsqueda está vacío
    }

    const filteredResults = data.filter(item => item.text.toLowerCase().includes(query));

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<div class="result">No se encontraron resultados</div>';
    } else {
        const resultList = document.createElement('ul');
        filteredResults.forEach(result => {
            const resultItem = document.createElement('li');
            const resultLink = document.createElement('a');
            resultLink.className = 'result';
            resultLink.textContent = result.text;
            resultLink.href = `#${result.id}`;
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

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    searchInput.blur(); // Quitar el foco del campo de búsqueda
});