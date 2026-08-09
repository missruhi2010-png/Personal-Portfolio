function time(){
    const now = new Date();
    const element = document.getElementById("time").textContent = now.toLocaleString();
}

setInterval(time, 1000);