const statusField = document.getElementById('status')
const messages = document.getElementById('messages')
const form = document.getElementById('form')
const input = document.getElementById('input')

const ws = new WebSocket('ws://localhost:3000')


function printMessage(message) {
    const li = document.createElement('li')
    li.innerHTML = message
    messages.appendChild(li)
}


ws.addEventListener('open', () => {
    statusField.innerHTML = 'ONLINE'
})

ws.addEventListener('close', () => {
    statusField.innerHTML = 'DISCONNECTED'
})

ws.addEventListener('message', (e) => {
    printMessage(e.data)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    ws.send(input.value)
    input.value = ''
})