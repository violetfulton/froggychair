import { frogfacts } from "./frogfacts.js";

function randomFact() {
    let num0 =  Math.floor(Math.random() * (frogfacts.length));
    const factbox = document.getElementById("factbox");
    factbox.innerHTML = frogfacts[num0];
    factbox.style.visibility = "visible";
}

document.getElementById("clickMe").onclick = randomFact;
