document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display a cat image based on selected criteria.
    function fetchCatImage(criteria) {
        // Base URL for the Cataas API.
        const baseUrl = 'https://cataas.com';

        // Construct the URL based on selected criteria.
        let catImageUrl = baseUrl;
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
                // Display the image on the webpage.
                const catImage = document.getElementById('cat-image');
                catImage.src = data.url;
            })
            .catch((error) => {
                console.error('Error fetching cat image:', error);
            });
    }

    // Event listener for the search button.
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function () {
        const criteria = {
            tag: document.getElementById('cat-tag').value,
            text: document.getElementById('cat-text').value,
            size: document.getElementById('cat-size').value,
            color: document.getElementById('cat-color').value,
            filter: document.getElementById('cat-filter').value,
            height: document.getElementById('cat-height').value,
        };

        fetchCatImage(criteria);
    });
});
