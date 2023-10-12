// Function to fetch and display a cat image based on criteria
function fetchCatImage(criteria) {
    // Base URL for the Cataas API.
    const baseUrl = 'https://cataas.com';
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

    console.log (catImageUrl)
          const catImage = document.getElementById('cat-image');
            console.log (catImage)
            catImage.src = catImageUrl;
    // fetch(catImageUrl)
    // .then (res=> res)
    // .then (data => console.log (data.json()))
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log (data)
        //     const catImage = document.getElementById('cat-image');
        //     catImage.src = data.url;
        // })
        // .catch((error) => {
        //     console.error('Error fetching cat image:', error);
        // });
}


// Function to add an event listener to the "Search" button
function addSearchButtonListener() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const criteria = {
            tag: document.getElementById('cat-tag').value,
            text: document.getElementById('cat-text').value,
            size: document.getElementById('cat-size').value,
            color: document.getElementById('cat-color').value,
            filter: document.getElementById('cat-filter').value,
            height: document.getElementById('cat-height').value,
        }; console.log (criteria)
        fetchCatImage(criteria);
    });
}

// Function to fetch and display a random cat image
function fetchRandomCatImage() {
    const catImageUrl = 'https://cataas.com/cat';
    const catImage = document.getElementById('cat-image');
            console.log (catImage)
            catImage.src = catImageUrl;
    
}

// Function to add an event listener to the "Random Cat" button
function addRandomCatButtonListener() {
    const randomCatButton = document.getElementById('random-cat-button');
    randomCatButton.addEventListener('click', fetchRandomCatImage);
}


// Call the functions to add the event listeners
addSearchButtonListener();
addRandomCatButtonListener();
