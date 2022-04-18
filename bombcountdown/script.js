export function bcd() {
    let input = document.getElementById("input_text");
    let btn = document.querySelector(".start");
    btn.addEventListener("click", StartTimer);

    function StartTimer() {
        input.contentEditable = "false";
        btn.setAttribute("disabled", "disabled");
        let date = parseTimer();
        let flag = true;
        let isFinished = false;
        if (isNaN(date)) {
            alert("Неправильно введено число");
            flag = false;
        }
        if (flag) {
            let interval = setInterval(() => {
                let now = new Date().getTime();
                let distance = date - now;
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                let milliseconds = Math.floor((distance % (1000)));
                let sHours = hours.toString();
                let sMinutes = minutes.toString();
                let sSeconds = seconds.toString();
                if (hours.toString().length == 1) {
                    sHours = "0" + hours.toString();
                }
                if (minutes.toString().length == 1) {
                    sMinutes = "0" + minutes.toString();
                }
                if (seconds.toString().length == 1) {
                    sSeconds = "0" + seconds.toString();
                }
                input.value = sHours + ":" + sMinutes + ":" + sSeconds + ":" + milliseconds;

                if (distance < 0) {
                    input.value = "00:00:00:00";
                    input.contentEditable = "true";
                    btn.removeAttribute("disabled");
                    clearInterval(interval);
                }
            }, 11);
        } else {
            btn.removeAttribute("disabled");
            input.value = "00:00:00:00";
        }
    }

    function parseTimer() {
        let text = input.value;
        for (let i = 0; i < text.length; i++) {
            if (!(text[i] >= "0" && text[i] <= "9") && (text[i] != ":")) {
                return NaN;
            }
        }
        let arr = text.split(":");
        let date;


        if (arr.length == 4) {
            date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
                new Date().getHours() + Number(arr[0]),
                new Date().getMinutes() + Number(arr[1]),
                new Date().getSeconds() + Number(arr[2]),
                new Date().getMilliseconds() + Number(arr[3]))
                .getTime();
            return date;
        } else {
            return NaN;
        }
    }
}