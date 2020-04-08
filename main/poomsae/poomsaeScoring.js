let accuracyScore = 4.0;
let presentationScore = 6.0;
let totalScore = 10.0;

function totalScoreUpdate() {
    let totalScore = accuracyScore + presentationScore;
    document.getElementById("totalScore").innerHTML = totalScore.toFixed(1);
}


function accuracyDeduction(major) {
    let deduction = major ? 0.3 : 0.1;
    accuracyScore = accuracyScore - deduction;
    if(accuracyScore<=0) accuracyScore = 0;
    document.getElementById("accuracyScore").innerHTML = accuracyScore.toFixed(1);
    totalScoreUpdate();
}

function presentationDeduction(major) {
    let deduction = major ? 0.3 : 0.1;
    presentationScore = presentationScore - deduction;
    if(presentationScore<=0) presentationScore = 0;
    document.getElementById("presentationScore").innerHTML = presentationScore.toFixed(1);
    totalScoreUpdate();
}

function refreshScores(){
    accuracyScore = 4.0;
    presentationScore = 6.0;
    document.getElementById("accuracyScore").innerHTML = accuracyScore.toFixed(1);
    document.getElementById("presentationScore").innerHTML = presentationScore.toFixed(1);
    document.getElementById("totalScore").innerHTML = totalScore.toFixed(1);
}
