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


    // Event listener for the heart icon and comment submission.
    const heartIcon = document.querySelector('.heart-icon');
    const commentInput = document.querySelector('.comment-input');
    const commentSubmitButton = document.querySelector('.comment-submit-button');
    const commentsContainer = document.querySelector('.comments');

    // Simulated data to track likes and comments
    let liked = false;
    const comments = [];

    // Toggle heart icon color
    heartIcon.addEventListener('click', () => {
        liked = !liked;
        if (liked) {
            likeCount =+ 1;
            heartIcon.textContent = '❤️' + likeCount;
            heartIcon.style.color = 'red';
        } else {
            likeCount -= 1;
            if (likeCount < 0) {
                likeCount = 0
            }
            heartIcon.textContent = '🤍' + likeCount;
            heartIcon.style.color = 'gray';
        }
    });

    // Add a new comment to the comments array and display it
    commentSubmitButton.addEventListener('click', () => {
        const newComment = commentInput.value;
        comments.push(newComment);

        // Display all comments
        const commentsHtml = comments.map(comment => `<p>${comment}</p>`).join('');
        commentsContainer.innerHTML = commentsHtml;
        commentInput.value = '';
    });




// Function to fetch and display a random cat image
function fetchRandomCatImage() {
    const catImageUrl = 'https://cataas.com/cat?r=' + Math.random();
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