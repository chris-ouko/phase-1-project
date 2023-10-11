function fetchCatImage(criteria) {
    // Base URL for the Cataas API.
    const baseUrl = 'https://cataas.com';

    let catImageUrl = baseUrl;

    // Check if the "tag" criterion is selected.
    if (criteria.tag) {
        // Append the "tag" to the URL.
        catImageUrl += `/cat/${criteria.tag}`;

        const criteria = {
            tag: 'cute',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    if (criteria.text) {
        catImageUrl += `/says/${criteria.text}`;

        const criteria = {
            text: 'hello',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    if (criteria.size) {
        catImageUrl += `?type=${criteria.size}`;

        const criteria = {
            size: 'small',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    if (criteria.color) {
        catImageUrl += `?color=${criteria.color}`;

        const criteria = {
            color: 'red',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    if (criteria.filter) {
        catImageUrl += `?filter=${criteria.filter}`;

        const criteria = {
            filter: 'sepia',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    if (criteria.height) {
        catImageUrl += `?height=${criteria.height}`;

        const criteria = {
            height: '20',   // Specify the tag you want to search for.
            // Add other criteria if needed.
        };
        
        fetchCatImage(criteria);
        
    }

    // Fetch the cat image based on the constructed URL.
    fetch('https://cataas.com')
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
