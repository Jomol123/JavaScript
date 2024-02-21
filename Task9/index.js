async function data() {
   
    console.log("start");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
        const data = await response.json();

        console.log(data[0].email);

    console.log("end");
}

data();