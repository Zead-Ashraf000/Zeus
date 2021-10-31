function main1() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent1").children[0].children[0].textContent;

    document.getElementById("idecontent1").children[0].children[0].textContent = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent1").children[0].children[0].textContent = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent1").children[0].children[0].textContent, Prism.languages.html, 'html')
            document.getElementById("idecontent1").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent1").style.cssText = "animation-name: textEditor;"
            main2()
        }
    }
}

function main2() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent2").children[0].children[0].textContent;

    document.getElementById("idecontent2").children[0].children[0].innerHTML = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent2").children[0].children[0].innerHTML = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent2").children[0].children[0].textContent, Prism.languages.css, 'css')
            document.getElementById("idecontent2").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent2").style.cssText = "animation-name: textEditor;"
            main3();
        }
    }
}

function main3() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent3").children[0].children[0].textContent;

    document.getElementById("idecontent3").children[0].children[0].innerHTML = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent3").children[0].children[0].innerHTML = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent3").children[0].children[0].textContent, Prism.languages.css, 'css')
            document.getElementById("idecontent3").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent3").style.cssText = "animation-name: textEditor;"
            main4();
        }
    }
}

function main4() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent4").children[0].children[0].textContent;

    document.getElementById("idecontent4").children[0].children[0].innerHTML = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent4").children[0].children[0].innerHTML = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent4").children[0].children[0].textContent, Prism.languages.css, 'css')
            document.getElementById("idecontent4").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent4").style.cssText = "animation-name: textEditor;"
            main5();
        }
    }
}

function main5() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent5").children[0].children[0].textContent;

    document.getElementById("idecontent5").children[0].children[0].innerHTML = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent5").children[0].children[0].innerHTML = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent5").children[0].children[0].textContent, Prism.languages.css, 'css')
            document.getElementById("idecontent5").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent5").style.cssText = "animation-name: textEditor;"
            main6();
        }
    }
}

function main6() {
    let myInterval = setInterval(textWriting, 5);

    let pattern = document.getElementById("idecontent6").children[0].children[0].textContent;

    document.getElementById("idecontent6").children[0].children[0].innerHTML = ""

    let i = 0;

    function textWriting() {

        i += 1;

        document.getElementById("idecontent6").children[0].children[0].innerHTML = pattern.slice(0, i);

        if (pattern.length == i) {
            clearInterval(myInterval);
            let highlighted = Prism.highlight(document.getElementById("idecontent6").children[0].children[0].textContent, Prism.languages.javascript, "javascript")
            document.getElementById("idecontent6").children[0].children[0].innerHTML = highlighted;
            document.getElementById("idecontent6").style.cssText = "animation-name: textEditor;"
            setTimeout(() => document.getElementById("idecontent7").style.cssText = "z-index: 9999;", 2000)
        }
    }
}

main1()