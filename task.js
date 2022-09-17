const img = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let factor = 0;
let timeStart = 0;
let timeStop;
let num = 1;
img.onclick = () => {
    img.width += 50 * num;
    count.textContent = Number(count.textContent) + 1;
    num *= -1;
    if (factor === 0) {
        timeStart = Date.now();
        factor = 1;
    } else {
        timeStop = Date.now()
        speed.textContent = Math.round(Number(count.textContent) / ((timeStop - timeStart) / 1000) * 100) / 100;
    }
}