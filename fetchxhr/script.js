const getDataButton = document.getElementById('getDataButton')

async function getData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    console.log(data);


}


getDataButton.addEventListener("click", getData)