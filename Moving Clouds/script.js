const elements = document.getElementsByClassName('cloud');
const element = elements[0];

element.style.top = (Math.random() * 100) + '%'
element.style.left = (Math.random() * 100) + '%'
element.style.transform = "scale(" + ((Math.random() * 0.7) + 0.3) + ")"

const intervalTimeInSeconds = (Math.random() * 20) + 6
element.style.transition = "all linear " + intervalTimeInSeconds + "s"

setTimeout(() => {
    element.style.left = '100%'
}, [100])

let x = 1
setInterval(() => {
    if (x % 2 === 0) {
        element.style.left = '100%'
    } else {
        element.style.left = '-50%'
    }
    x += 1
}, intervalTimeInSeconds * 1000)
