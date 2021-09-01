/*  
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    E: 59<
*/

let calculateResult = function(marksObtained, totalMarks) {
    let percentage = (marksObtained/totalMarks)*100;
    let letterString = '';
    if(marksObtained >= 90 && marksObtained <= 100) {
        letterString = 'A';
    }
    else if(marksObtained >= 80 && marksObtained <= 89) {
        letterString = 'B';
    }
    else if(marksObtained >= 70 && marksObtained <= 79) {
        letterString = 'C';
    }
    else if(marksObtained >= 60 && marksObtained <= 69) {
        letterString = 'D';
    }
    else {
        letterString = 'E';
    }
    return `You got a ${letterString} grade with ${percentage} percentage`;
}

let result = calculateResult(70, 100);
console.log(result);