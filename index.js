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
    }

// Function to fetch and display a cat image based on criteria
function fetchCatImage(criteria) {
    // ... your existing code ...

    // After you set the catImage.src, add event listeners for like and comment.
    const catImage = document.getElementById('cat-image');
    const likeButton = document.querySelector('.like-button');
    const commentButton = document.querySelector('.comment-button');
    const commentInput = document.querySelector('.comment-input');
    const commentSubmitButton = document.querySelector('.comment-submit-button');
    const commentsContainer = document.querySelector('.comments');

    // Simulated data to track likes and comments
    let likes = 0;
    const comments = [];

    // Update the like count and display comments
    likeButton.addEventListener('click', () => {
        likes += 1;
        likeButton.textContent = `Like (${likes})`;
    });

    // Add a new comment to the comments array and display it
    commentSubmitButton.addEventListener('click', () => {
        const newComment = commentInput.value;
        comments.push(newComment);

        // Display all comments
        const commentsHtml = comments.map(comment => `<p>${comment}</p>`).join('');
        commentsContainer.innerHTML = commentsHtml;
        commentInput.value = ''; // Clear the input field
    });
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
