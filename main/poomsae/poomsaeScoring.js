let accuracyScore = 4.0;
let presentationScore = 6.0;
let totalScore = 10.0;
let accuracyMajorDeductionCount = 0;
let accuracyMinorDeductionCount = 0;
let presentationMajorDeductionCount = 0;
let presentationMinorDeductionCount = 0;

function totalScoreUpdate() {
    let totalScore = accuracyScore + presentationScore;
    document.getElementById("totalScore").innerHTML = totalScore.toFixed(1);
}


function accuracyDeduction(major) {
    if(accuracyScore<0.1) return;
    let deduction = major ? 0.3 : 0.1;
    accuracyScore = accuracyScore - deduction;
    if(accuracyScore<=0) accuracyScore=0;

    // handle deduction counters
    if(major){
        accuracyMajorDeductionCount++;
        document.getElementById("accuracyMajorDeductionCount").innerHTML = accuracyMajorDeductionCount;
    } else{
        accuracyMinorDeductionCount++;
        document.getElementById("accuracyMinorDeductionCount").innerHTML = accuracyMinorDeductionCount;
    }

    // update scores
    document.getElementById("accuracyScore").innerHTML = accuracyScore.toFixed(1);
    totalScoreUpdate();
}

function presentationDeduction(major) {
    if(presentationScore<0.1) return;
    let deduction = major ? 0.3 : 0.1;
    presentationScore = presentationScore - deduction;
    if(presentationScore<=0) presentationScore = 0;
    
    // handle deduction counters
    if(major){
        presentationMajorDeductionCount++;
        document.getElementById("presentationMajorDeductionCount").innerHTML = presentationMajorDeductionCount;
    } else{
        presentationMinorDeductionCount++;
        document.getElementById("presentationMinorDeductionCount").innerHTML = presentationMinorDeductionCount;
    }

    // update scores
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

function deductionStatisticUpdate(major, category) {
    
}