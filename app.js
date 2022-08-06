

window.setInterval(timer, 1000);

function timer(){
    let date = new Date();
    let soat = document.getElementById('soat');
    let minut = document.getElementById('minut');
    let sekund = document.getElementById('sekund');
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    soat.innerHTML = h;
    minut.innerHTML = m;
    sekund.innerHTML = s;
}
    