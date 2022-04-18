export function wam() {
    let randomTime;
    let holes = document.querySelectorAll(".circle");
    let timeUp = false;
    let score = document.querySelector(".number");
    let scores = 0;

    let buttonStart = document.querySelector(".btn_start");
    buttonStart.addEventListener('click', startGame);

    function getRandomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function getRandomCircle(holes) {
        let index = Math.floor(Math.random() * holes.length);
        let hole = holes[index];
        return hole;
    }

    let flag = false;

    function startGame() {
        scores = 0;
        score.textContent = "0";
        document.getElementById("btn").setAttribute("disabled", "disabled");
        timeUp = false;
        peep();
        setTimeout(() => {
            timeUp = true;
            document.getElementById("btn").removeAttribute("disabled");
        }, 30000);
    }


    holes.forEach(hole => hole.addEventListener('click', whack));

    function whack(e) {
        if (e.target.classList.contains('up')) {
            scores++;
            e.target.classList.remove('up');
            score.textContent = scores;
        }

    }

    function peep() {
        let hole = getRandomCircle(holes);
        let time = getRandomTime(500, 1000);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) peep();
        }, time);
    }

    function Whack(time) {
        for (let i = 0; i < 100; i++) {
            peep();
        }
    }
}