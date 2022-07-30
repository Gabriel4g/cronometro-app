const textMinutes = document.querySelector(".minutos");
const textSegundos = document.querySelector(".segundos");
const textMiliSegundos = document.querySelector(".milisegundos");
const textHoras = document.querySelector(".horas");
const startButton = document.querySelector("#start-button");

let miliSeconds = 0
let seconds = 0
let minutes = 0
let horas = 0

let interval;

const start = () => {
    interval = setInterval(() => {
        textHoras.innerHTML = horas
        textMinutes.innerHTML = minutes

        textMiliSegundos.innerHTML = miliSeconds++

        if (miliSeconds == 60) {
            textSegundos.innerHTML = seconds++
            miliSeconds = 0
        }

        else if (seconds == 60) {
            textMinutes.innerHTML = minutes++
            seconds = 0
        }

        else if (minutes == 60) {
            textHoras.innerHTML = horas++
            minutes = 0
        }

        startButton.setAttribute("disabled", "disabled")
    }, 10)
}

const stop = () => {
    clearInterval(interval);

    startButton.removeAttribute("disabled")
}

const reset = () => {
    clearInterval(interval)

    miliSeconds = 0
    seconds = 0
    minutes = 0
    horas = 0

    textMiliSegundos.innerHTML = 0
    textSegundos.innerHTML = 0
    textMinutes.innerHTML = 0
    textHoras.innerHTML = 0

    startButton.removeAttribute("disabled")
}