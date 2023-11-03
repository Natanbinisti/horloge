setInterval(setClock, 1000)

const heur = document.querySelector('[data-hour-hand]')
const minute = document.querySelector('[data-minute-hand]')
const second = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(second, secondsRatio)
    setRotation(minute, minutesRatio)
    setRotation(heur, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()