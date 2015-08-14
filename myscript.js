$(document).keypress(function(e){
    if($("#answerButton").is(":visible")){
        if (e.which == 13){
            $("#answerButton").click();
        }
    }
});

var t, count = 60;
var x, y;
var score = 0;

function cddisplay() {
    document.getElementById('timespan').innerHTML = count;
}

function countdown() {
    // starts countdown
    document.getElementById("startButton").style.display="none";
    document.getElementById("problemsPage").style.display="table-cell";

    cddisplay();

    
    
    if (count == 0) {
        end();
        document.getElementById('timespan').innerHTML = 60;
    

    } else {
        count--;
        t = setTimeout(countdown, 1000);
    }
    
}

function cdreset() {
    count = 60;
    score = 0;
    cddisplay();
}

function newProblem(){
var x=Math.floor(Math.random() * 10);
var y=Math.floor(Math.random() * 10);

$("#firstNumberDiv").text(x);
$("#secondNumberDiv").text(y);
}



function submitAnswer(){
    var a = document.getElementById('firstNumberDiv').innerHTML;
    var b = document.getElementById('secondNumberDiv').innerHTML;
    var c = +a + +b;
    
    if (c==document.getElementById('answerDiv').value) {
        score++;
        document.getElementById('currentScore').innerHTML = "Current Score: " + score;
        document.getElementById('answerDiv').value="";
        setFocus();
        newProblem();
    }
    else{
        document.getElementById('answerDiv').value="";
        setFocus();
        newProblem();

    }
}

function setFocus(){
    document.getElementById('answerDiv').focus();
}
function end(){
    document.getElementById("problemsPage").style.display="none";
    document.getElementById("endPage").style.display="table-cell";
    document.getElementById('answerDiv').value="";
    document.getElementById('finalScore').innerHTML = 'Your final score is: ' + score;
}
function replay(){
    cdreset();
    countdown();
    document.getElementById("problemsPage").style.display="table-cell";
    document.getElementById("endPage").style.display="none";
    document.getElementById('currentScore').innerHTML = "Current Score: ";

}