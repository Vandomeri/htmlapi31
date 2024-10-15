const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const messages = document.querySelector('#messages')
const bodyEl = document.querySelector('body')

function printMessage(msg) {
    const li = document.createElement('li')
    li.innerHTML = msg
    messages.appendChild(li)
}


let eventSource

start.addEventListener('click', () => {

    if (!window.EventSource) {
        alert('Ваш браузер не поддерживает Event Source')
        return
    }


    eventSource = new EventSource('http://localhost:8080')

    eventSource.addEventListener('open', () => {
        printMessage('Соединение установленно')
    })


    eventSource.addEventListener('message', (e) => {
        const kyrs = JSON.parse(e.data)
        printMessage(`1 биткоин равен ${kyrs.data.last}`)
    })

})

stop.addEventListener('click', () => {
    eventSource.close()
})
