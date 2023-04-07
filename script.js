`use strict`
const modeChangerButton = document.getElementById("modechanger");
const bdy = document.querySelector("body")
const nav1 = document.getElementById("headNav")
const nav2 = document.getElementById("mnNav")
const nav2font = document.querySelectorAll(".fntclr")
const mrq = document.querySelectorAll(".marrq span")
// const cardA = document.getElementById("card1")
const cardA = document.querySelectorAll(".card1")
const foot = document.getElementById("ftr")
const fontSizeEl = 11
const titl = document.getElementById("mdu")
const voiceMode = document.getElementById("btn-check-outlined")
const pls = document.getElementById("plsbt")
const min = document.getElementById("minbt")
let fontsz = fontSizeEl
let vMode = "🌚";
let isdark = false
titl.style.fontSize = `${fontSizeEl}px`;
modeChangerButton.textContent = vMode;


const increaser = function () {

    fontsz += 1;
    titl.style.fontSize = `${fontsz}px`;





}
const decreaser = function () {

    fontsz -= 1;
    titl.style.fontSize = `${fontsz}px`;





}










const dark = function () {
    vMode = "☀️";

    // body.style.backgroundColor = "black"
    // mainEl.style.color = "white"
    // navv.style.backgroundColor = "black"
    // navv.style.borderBottom = "2px" + " " + "solid" + " " + "white"
    // drp.style.backgroundColor = "white"
    // modeChangerButton.textContent = vMode;
    // isdark = true

    bdy.style.backgroundColor = "black"
    nav1.style.backgroundColor = "black"
    nav2.style.backgroundColor = "black"


    nav2font[0].style.color = "white"
    nav2font[1].style.color = "white"
    nav2font[2].style.color = "white"
    nav2font[3].style.color = "white"
    nav2font[4].style.color = "white"





    nav2.style.borderBottom = "2px" + " " + "solid" + " " + "white"
    modeChangerButton.textContent = vMode;

    cardA[0].style.backgroundColor = "black"
    cardA[0].style.border = "2px" + " " + "solid" + " " + "white"
    cardA[0].style.color = "white"

    cardA[1].style.backgroundColor = "black"
    cardA[1].style.border = "2px" + " " + "solid" + " " + "white"
    cardA[1].style.color = "white"

    cardA[2].style.backgroundColor = "black"
    cardA[2].style.border = "2px" + " " + "solid" + " " + "white"
    cardA[2].style.color = "white"

    foot.style.backgroundColor = "black"
    foot.style.borderTop = "2px" + " " + "solid" + " " + "white"


    // mrq[1].style.Color = "white"


    modeChangerButton.textContent = vMode;


    isdark = true

}
const light = function () {
    vMode = "🌚";
    modeChangerButton.textContent = vMode;


    bdy.style.backgroundColor = "white"
    nav1.style.backgroundColor = "white"
    nav2.style.backgroundColor = "white"


    nav2.style.borderBottom = "none"
    modeChangerButton.textContent = vMode;

    cardA[0].style.backgroundColor = "white"
    cardA[0].style.border = "1px" + " " + "solid" + " " + "black"
    cardA[0].style.color = "black"

    cardA[1].style.backgroundColor = "white"
    cardA[1].style.border = "2px" + " " + "solid" + " " + "black"
    cardA[1].style.color = "black"

    cardA[2].style.backgroundColor = "white"
    cardA[2].style.border = "2px" + " " + "solid" + " " + "black"
    cardA[2].style.color = "black"

    nav2font[0].style.color = "black"
    nav2font[1].style.color = "black"
    nav2font[2].style.color = "black"
    nav2font[3].style.color = "black"
    nav2font[4].style.color = "black"

    foot.style.backgroundColor = "aquamarine"
    foot.style.borderTop = "none"
    isdark = false


}
const chk = function () {
    if (isdark === true) {
        light()
    } else {
        dark()
    }

}





const utterance1 = new SpeechSynthesisUtterance(cardA[1].innerText);



modeChangerButton.addEventListener("click", chk)

pls.addEventListener("click", increaser)
min.addEventListener("click", decreaser)

// cardA[1].addEventListener("mouseenter", () => {



//     window.speechSynthesis.speak(utterance1);


// })


// cardA[1].addEventListener("mouseout", () => {



//     window.speechSynthesis.cancel(utterance1);


// })
let speech = new SpeechSynthesisUtterance();

onmouseup = (event) => {

    window.speechSynthesis.cancel();
    if (window.getSelection) {
        txt = window.getSelection();
        console.log(txt.toString().trim());

        if ((txt.toString().trim() !== "") && (voiceMode.checked)) {
            speech.text = txt; // give text here to speak
            // Start Speaking
            window.speechSynthesis.speak(speech);
        }

    }

}

const anchors = document.querySelectorAll("a");
anchors.forEach((elem) => {
    elem.onmouseover = function (e) {

        if (voiceMode.checked) {


            var target = e.target ? e.target : e.srcElement;
            window.speechSynthesis.cancel();
            speech.text = target.innerText; // give text here to speak
            // Start Speaking
            window.speechSynthesis.speak(speech);
        }
    };
});





