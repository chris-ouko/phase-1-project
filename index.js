document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cataas.com/cat?json=true")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let imageDiv = document.createElement("div")
            imageDiv.className = "images"
            imageDiv.innerHTML = `
         <img src="https://cataas.com/${data.url}">
        `
            document.querySelector(".image1").appendChild(imageDiv)
            document.querySelector("#random").addEventListener("click", () => {
                changeButton();
            })
        })
    function changeButton() {
        fetch("https://cataas.com/cat?json=true")
            .then(res => res.json())
            .then(element => {
                document.querySelector(".image1").innerHTML = ``
                let imageDiv2 = document.createElement("div")
                imageDiv2.className = replacer
                imageDiv2.innerHTML = `
        <img src="https://cataas.com/${element.url}">
        `
                document.querySelector(".image1").appendChild(imageDiv2)
        })
    
}});