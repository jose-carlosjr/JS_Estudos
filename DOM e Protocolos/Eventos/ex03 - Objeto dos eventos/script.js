const container = document.querySelector('#container')

function msg(e) {
    console.log(e)
    console.log(e.altitudeAngle)
    console.log(e.timeStamp)
}

container.addEventListener('click', msg)