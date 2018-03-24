function start(){
    let points = 0;
    let theWordElement = document.getElementById("theWord");
    var input = document.getElementById("input");
    let pointsElement = document.getElementById("points");
    let start = document.getElementById("start");
    toRemeber = input.value;
    document.getElementById("input").value = "";
    
    input.setAttribute("placeholder","Keep Re-Entering");
    start.style.setProperty("display","none");
    pointsElement.style.setProperty("display","block");

    setInterval(function (){
        if (input.value === toRemeber){
            points++;
            document.getElementById("input").value = "";
        }
        let count = document.createTextNode(`points: ${points}`);
        pointsElement.replaceChild(count, pointsElement.childNodes[0]);
    }, 1000);
}

function reveal() {
    let theWordElement = document.getElementById("theWord");
    theWordElement.innerHTML = toRemeber;
}

function hide(){
    let theWordElement = document.getElementById("theWord");
    theWordElement.innerHTML = "...";
}