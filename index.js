document.addEventListener("DOMContentLoaded", function () {
    const catImageContainer = document.getElementById("cat-image-container");
    const randomCatButton = document.getElementById("random-cat-button");
    const catTagInput = document.getElementById("cat-tag");
    const catTextInput = document.getElementById("cat-text");
    const catSizeSelect = document.getElementById("cat-size");
    const catColorInput = document.getElementById("cat-color");
    const catFilterSelect = document.getElementById("cat-filter");
    const catWidthInput = document.getElementById("cat-width");
    const catHeightInput = document.getElementById("cat-height");
    const catHtmlCheckbox = document.getElementById("cat-html");
    const catJsonCheckbox = document.getElementById("cat-json");

    randomCatButton.addEventListener("click", function () {
        // Build the API URL based on user customization options
        const baseUrl = "https://cataas.com/cat";
        let apiUrl = baseUrl;

        if (catTagInput.value) {
            apiUrl += `/${catTagInput.value}`;
        }

        if (catTextInput.value) {
            apiUrl += `/says/${catTextInput.value}`;
        }

        const selectedSize = catSizeSelect.value;
        if (selectedSize !== "original") {
            apiUrl += `?type=${selectedSize}`;
        }

        const selectedFilter = catFilterSelect.value;
        if (selectedFilter !== "none") {
            apiUrl += `?filter=${selectedFilter}`;
        }

        if (catWidthInput.value) {
            apiUrl += `?width=${catWidthInput.value}`;
        }

        if (catHeightInput.value) {
            apiUrl += `?height=${catHeightInput.value}`;
        }

        if (catHtmlCheckbox.checked) {
            apiUrl += "?html=true";
        }

        if (catJsonCheckbox.checked) {
            apiUrl += "?json=true";
        }

        // Fetch a random cat image from the API
        fetch(apiUrl)
            .then((response) => response.text())
            .then((data) => {
                // Display the cat image in the container
                catImageContainer.innerHTML = data;
            })
            .catch((error) => {
                console.error("Error fetching cat image:", error);
            });
    });
});
