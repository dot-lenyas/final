import {wam} from "./wam/script"
import {art} from "./artStation/script";
import {ref} from "./refrigirator/script"
import {bcd} from "./bombcountdown/script"

if (document.title != "Final") {

    let hdr = document.getElementsByTagName("body")[0];

    let home = document.createElement("div")

    home.innerText = "На главную"
    home.style.fontSize = "2em"
    home.style.backgroundColor = "#999"
    home.style.color = "#050"
    home.style.textAlign = "center"

    home.addEventListener("click", () => (document.location.assign("../index.html")))

    hdr.prepend(home)

}


if (document.title === "ArtStation") {
    art()
} else if (document.title === "Refrigerator") {
    ref()
} else if (document.title === "Bomb CountDown") {
    bcd()
} else if (document.title === "Whack A Mole") {
    wam()
}
