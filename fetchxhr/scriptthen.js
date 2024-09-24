const getDataButton = document.getElementById('getDataButton')

function getData() {
    let data = []
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((data) => data.json())
        .then((json) => data = json)
}


getDataButton.addEventListener("click", getData)