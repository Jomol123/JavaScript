function dogImage() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random";

    fetch(apiUrl)
        .then(response => {return response.json();
        })
        .then(data => {
            const dogImageElement = document.getElementById("dogImage");
            dogImageElement.src = data.message;
            dogImageElement.alt = " Dog Image";
        })
        .catch(error => {
            console.error("Error fetching random dog image:", error);
        });
}




