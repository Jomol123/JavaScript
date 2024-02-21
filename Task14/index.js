function fetchData() {
    const url = "https://api.spacexdata.com/v4/launches/latest";
    
    fetch(url)   
        .then(response => {return response.json();
        })
        .then(data => { displayData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function displayData(data) {
    const userInfo = document.getElementById('data');
    userInfo.innerHTML = `
        <h4>Name: ${data.name}</h4>
        <p>Date: ${data.date_utc}</p>
        <p>Success: ${data.success}</p>
           `;
}