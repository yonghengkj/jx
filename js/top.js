var tops = document.querySelector('.tops');
var istop = true;
var timer = null;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 600) {
        tops.style.display = "block";
    } else {
        tops.style.display = "none";
    }
    if (!istop) {
        clearInterval(timer);
    }
    istop = false;
};

function returnTop() {
    timer = setInterval(function () {
        var dtop = document.documentElement.scrollTop;
        var speed = Math.floor(-dtop / 10);
        document.documentElement.scrollTop = dtop + speed;
        istop = true;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer)
        }
    }, 30)
}
