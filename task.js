// Все равно не совсем понял условие задания.

const img = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let timeStart = 0;   // При делении 1 на количество секунд, прошедших сначала "цифрового века", практически ноль и получается. Не стал описывать первый клик.
let timeStop;
let num = 1;
img.onclick = () => {
    img.width += 50 * num;
    count.textContent = Number(count.textContent) + 1;
    num *= -1;
    timeStop = Date.now();
    speed.textContent = Math.round(1 / ((timeStop - timeStart) / 1000) * 100) / 100;
    timeStart = Date.now();
}
