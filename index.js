document.addEventListener("DOMContentLoaded", function () {
    const catImage = document.getElementById("cat-image");
    const searchButton = document.getElementById("search-button");
    const catSearchForm = document.getElementById("cat-search-form");

    // Function to load a random cat image based on search criteria
    function searchCats() {
        const catTag = document.getElementById("cat-tag").value;
        const catText = document.getElementById("cat-text").value;
        const catSize = document.getElementById("cat-size").value;
        const catColor = document.getElementById("cat-color").value;
        const catFilter = document.getElementById("cat-filter").value;
        const catHeight = document.getElementById("cat-height").value;

        // Construct the API URL based on user input
        let apiUrl = "https://cataas.com/cat";
        if (catTag) {
            apiUrl = apiUrl + "/" + catTag;
        }
        if (catText) {
            apiUrl = apiUrl + "/says/" + catText;
        }
        if (catSize) {
            apiUrl = apiUrl + "?type=" + catSize;
        }
        if (catColor) {
            apiUrl = apiUrl + "?color=" + catColor;
        }
        if (catFilter) {
            apiUrl = apiUrl + "?filter=" + catFilter;
        }
        if (catHeight) {
            apiUrl = apiUrl + "?height=" + catHeight;
        }

        // Make a GET request to retrieve the cat image
        fetch(apiUrl)
            .then((response) => response.text())
            .then((data) => {
                catImage.src = `https://cataas.com/cat?json=true${data}`;
            })
            .catch((error) => {
                console.error("Error loading cat image:", error);
            });
    }

    // Add an event listener to the search button
    searchButton.addEventListener("click", searchCats);
});
