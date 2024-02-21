const imageUrl = "photo/global_monthly_1850-2023-1.webp";
function fetchData() {
    const weatherUrl = "https://goweather.herokuapp.com/weather/India";
   
    
    fetch(weatherUrl)   
    .then(response => {return response.json()})

    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}
function displayData(data) {
    console.log(data);
    const userInfo = document.getElementById('data');
    userInfo.innerHTML = `
        <h4>Today Temperature: ${data.temperature}</h4>
        <h4>Wind:${data.wind}</h4>
        <h4>description:${data.description}</h4>
        <img src="${imageUrl}" alt="Weather Image" />
    `;
}



