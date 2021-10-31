// loader

const loader = document.getElementById("loader");

window.addEventListener("load", hideLoading);

function hideLoading() {
    setTimeout(() => loader.style.cssText = "opacity: 0;", 5000)
    setTimeout(() => loader.style.cssText = "display: none;", 6000);
}

/****************************** dissapperer ********************************/

const hello = document.getElementById("hello");

// dissapper hello and show filler

setTimeout(() => {
    hello.className = "diss"
    const fillblue = document.createElement("div");
    const filler = document.createElement("span");
    fillblue.className = "fillblue";
    fillblue.id = "fillblue"
    document.body.appendChild(fillblue);
    fillblue.appendChild(filler);
}, 32000)

// make exhibition

setTimeout(() => {
    const exhbition = document.createElement("section");
    exhbition.className = "exhbition";
    exhbition.id = "exhbition";
    document.body.appendChild(exhbition);
    document.getElementById("exhbition").style.opacity = 0;
}, 30000)

// show exhibition

setTimeout(() => {
    document.getElementById("exhbition").style.cssText = "opacity: 1; transition: 2s;"
}, 34000)

//dissapper filler

setTimeout(() => {
    const dissfill = document.getElementById("fillblue");
    dissfill.className = "diss";
}, 35000)