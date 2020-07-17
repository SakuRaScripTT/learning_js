window.onload = function() {
    function startTime() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        hour = checkTime(hour);
        min = checkTime(min);
        sec = checkTime(sec);

        document.querySelector('.top-right').innerHTML = hour + ":" + min + ":" + sec;
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    let timer = setInterval(startTime,900);
}
