document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch cat image based on criteria.
    function fetchCatImage(criteria) {
        // Base URL for the Cataas API.
        const baseUrl = 'https://cataas.com';
        let catImageUrl = baseUrl;

        // Check if the "tag" criterion is selected.
        if (criteria.tag) {
            catImageUrl += `/cat/${criteria.tag}`;
        }

        if (criteria.text) {
            catImageUrl += `/says/${criteria.text}`;
        }

        if (criteria.size) {
            catImageUrl += `?type=${criteria.size}`;
        }

        if (criteria.color) {
            catImageUrl += `?color=${criteria.color}`;
        }

        if (criteria.filter) {
            catImageUrl += `?filter=${criteria.filter}`;
        }

        if (criteria.height) {
            catImageUrl += `?height=${criteria.height}`;
        }

        // Fetch the cat image based on the constructed URL.
        fetch(catImageUrl)
            .then((response) => response.json())
            .then((data) => {
                // Displays the image on the webpage.
                const catImage = document.getElementById('cat-image');
                catImage.src = data.url;
            })
            .catch((error) => {
                console.error('Error fetching cat image:', error);
            });
    }

    // Function to fetch a random cat image.
    function fetchRandomCatImage() {
        // Base URL for a random cat image.
        const randomCatUrl = 'https://cataas.com/cat';

        // Fetch a random cat image.
        fetch(randomCatUrl)
            .then((response) => response.json())
            .then((data) => {
                // Display the random cat image on the webpage.
                const catImage = document.getElementById('cat-image');
                catImage.src = data.url;
            })
            .catch((error) => {
                console.error('Error fetching random cat image:', error);
            });
    }

    // Event listener for the "Random Cat" button.
    const randomCatButton = document.getElementById('random-cat-button');
    randomCatButton.addEventListener('click', fetchRandomCatImage);

    // Event listener for the search button.
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
        // Retrieve criteria from user inputs.
        const criteria = {
            tag: document.getElementById('cat-tag').value,
            text: document.getElementById('cat-text').value,
            size: document.getElementById('cat-size').value,
            color: document.getElementById('cat-color').value,
            filter: document.getElementById('cat-filter').value,
            height: document.getElementById('cat-height').value,
        };

        // Fetch cat image based on criteria.
        fetchCatImage(criteria);
    });

    // ... (other code)
});
