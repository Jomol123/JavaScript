
function fetchUserData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    
    fetch(url)   
        .then(response => {return response.json();
        })
        .then(userData => { displayUser(userData);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function displayUser(data) {
    const userInfo = document.getElementById('data');
    userInfo.innerHTML = `
        <h4>Name: ${data.name}</h4>
        <p>Email: ${data.email}</p>
        <p>Phone No: ${data.phone}</p>
    `;
}


