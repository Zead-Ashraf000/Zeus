setTimeout(() => {
    var exhbition = document.getElementById("exhbition");
    exhbition.appendChild(title);
    title.id = "title";

    paragraph1.id = "paragraph1";
    paragraph2.id = "paragraph2";
    paragraph3.id = "paragraph3";
    paragraph4.id = "paragraph4";
    paragraph5.id = "paragraph5";

    exhbition.appendChild(paragraph1);
    exhbition.appendChild(paragraph2);
    exhbition.appendChild(paragraph3);
    exhbition.appendChild(paragraph4);
    exhbition.appendChild(paragraph5);
    exhbition.appendChild(action);

    var i = 0;

    document.body.addEventListener("keydown", (event) => {
        if (event.keyCode == 38 || event.keyCode == 87) {
            if (i == 0) {
                document.getElementById("title").nextElementSibling.style.cssText = "opacity: 1;"
                i++

            } else if (i == 1) {
                document.getElementById("paragraph1").nextElementSibling.style.cssText = "opacity: 1;"
                i++
            } else if (i == 2) {
                document.getElementById("paragraph2").nextElementSibling.style.cssText = "opacity: 1;"
                i++
            } else if (i == 3) {
                document.getElementById("paragraph3").nextElementSibling.style.cssText = "opacity: 1;"
                i++
            } else if (i == 4) {
                document.getElementById("paragraph4").nextElementSibling.style.cssText = "opacity: 1;"
                i++
            } else if (i == 5) {
                document.getElementById("paragraph5").nextElementSibling.style.cssText = "opacity: 1;"
                i++
                setTimeout(() => {
                    document.getElementById("exhbition").style.cssText = "opacity: 0;"
                    const firesection = document.createElement("section");
                    firesection.className = "firesection";
                    firesection.id = "firesection";
                }, 3500)
                setTimeout(() => {
                    document.getElementById("exhbition").className = "diss";
                    const zebracame = document.createElement("h1");
                    const zebracamep = document.createTextNode("zebra came home");
                    zebracame.appendChild(zebracamep)
                    const fireworks = document.createElement("section");
                    document.body.appendChild(fireworks);
                    fireworks.className = "fireworks";
                    fireworks.id = "fireworks";
                    const scanvas = document.createElement("canvas");

                    scanvas.id = "Canvas";

                    fireworks.appendChild(scanvas);
                    fireworks.appendChild(zebracame);

                    const animtedbutton = document.createElement("button");
                    const contanimtedbutton = document.createElement("div");
                    const animtedbuttonpar = document.createElement("p");
                    const animtedbuttonparagraph = document.createTextNode("Learn more");

                    contanimtedbutton.appendChild(animtedbutton)
                    fireworks.appendChild(contanimtedbutton);
                    animtedbutton.appendChild(animtedbuttonpar);
                    animtedbuttonpar.appendChild(animtedbuttonparagraph);
                    animtedbutton.id = "buttonEvent"
                    document.getElementById("buttonEvent").onclick = () => window.location = "../Zeus - exhibition 2/index.html";

                    mainfire()

                }, 6500)
            }
        }
    })

    document.body.addEventListener("keydown", (event) => {
        if (event.keyCode == 40 || event.keyCode == 83) {
            if (i == 1) {
                document.getElementById("paragraph1").style.cssText = "opacity: 0;"
                i--
            } else if (i == 2) {
                document.getElementById("paragraph2").style.cssText = "opacity: 0;"
                i--
            } else if (i == 3) {
                document.getElementById("paragraph3").style.cssText = "opacity: 0;"
                i--
            } else if (i == 4) {
                document.getElementById("paragraph4").style.cssText = "opacity: 0;"
                i--
            } else if (i == 5) {
                document.getElementById("paragraph5").style.cssText = "opacity: 0;"
                i--
            }
        }
    })

}, 40000)

/************************* Title *******************/

const title = document.createElement("h1");
const titlep = document.createTextNode("press up Arrow");
title.appendChild(titlep);

const action = document.createElement("h2");
const actionp = document.createTextNode("So...");
action.appendChild(actionp);

/************************* paragraphs *******************/

const paragraph1 = document.createElement("p");
const paragraphp1 = document.createTextNode("In the world of hacking");
paragraph1.appendChild(paragraphp1);

const paragraph2 = document.createElement("p");
const paragraphp2 = document.createTextNode("Hackers do something called: Aestivation");
paragraph2.appendChild(paragraphp2);

const paragraph3 = document.createElement("p");
const paragraphp3 = document.createTextNode("Aestivation is the act when some animal go to sleep the whole summer because they can't afford the hotness of the summer!");
paragraph3.appendChild(paragraphp3);

const paragraph4 = document.createElement("p");
const paragraphp4 = document.createTextNode("but hackers do that for a diffrent reason!");
paragraph4.appendChild(paragraphp4);

const paragraph5 = document.createElement("p");
const paragraphp5 = document.createTextNode("Hackers do the Aestivation to grab New informations and back with a take breathing project!");
paragraph5.appendChild(paragraphp5);

/************************************************/


function mainfire(argument) {
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");

    var cwidth, cheight;
    var shells = [];
    var pass = [];

    var colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

    window.onresize = function() { reset(); }
    reset();

    function reset() {

        cwidth = window.innerWidth;
        cheight = window.innerHeight;
        c.width = cwidth;
        c.height = cheight;
    }

    function newShell() {

        var left = (Math.random() > 0.5);
        var shell = {};
        shell.x = (1 * left);
        shell.y = 1;
        shell.xoff = (0.01 + Math.random() * 0.007) * (left ? 1 : -1);
        shell.yoff = 0.01 + Math.random() * 0.007;
        shell.size = Math.random() * 6 + 3;
        shell.color = colors[Math.floor(Math.random() * colors.length)];

        shells.push(shell);
    }

    function newPass(shell) {

        var pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

        for (i = 0; i < pasCount; i++) {

            var pas = {};
            pas.x = shell.x * cwidth;
            pas.y = shell.y * cheight;

            var a = Math.random() * 4;
            var s = Math.random() * 10;

            pas.xoff = s * Math.sin((5 - a) * (Math.PI / 2));
            pas.yoff = s * Math.sin(a * (Math.PI / 2));

            pas.color = shell.color;
            pas.size = Math.sqrt(shell.size);

            if (pass.length < 1000) { pass.push(pas); }
        }
    }

    var lastRun = 0;
    Run();

    function Run() {

        var dt = 1;
        if (lastRun != 0) { dt = Math.min(50, (performance.now() - lastRun)); }
        lastRun = performance.now();

        //ctx.clearRect(0, 0, cwidth, cheight);
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.fillRect(0, 0, cwidth, cheight);

        if ((shells.length < 10) && (Math.random() > 0.96)) { newShell(); }

        for (let ix in shells) {

            var shell = shells[ix];

            ctx.beginPath();
            ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);
            ctx.fillStyle = shell.color;
            ctx.fill();

            shell.x -= shell.xoff;
            shell.y -= shell.yoff;
            shell.xoff -= (shell.xoff * dt * 0.001);
            shell.yoff -= ((shell.yoff + 0.2) * dt * 0.00005);

            if (shell.yoff < -0.005) {
                newPass(shell);
                shells.splice(ix, 1);
            }
        }

        for (let ix in pass) {

            var pas = pass[ix];

            ctx.beginPath();
            ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
            ctx.fillStyle = pas.color;
            ctx.fill();

            pas.x -= pas.xoff;
            pas.y -= pas.yoff;
            pas.xoff -= (pas.xoff * dt * 0.001);
            pas.yoff -= ((pas.yoff + 5) * dt * 0.0005);
            pas.size -= (dt * 0.002 * Math.random())

            if ((pas.y > cheight) || (pas.y < -50) || (pas.size <= 0)) {
                pass.splice(ix, 1);
            }
        }
        requestAnimationFrame(Run);
    }

}