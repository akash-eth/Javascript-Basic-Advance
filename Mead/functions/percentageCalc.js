let percentageCalc = function(totalMarks = 100, studentMarks) {
    let percentage = (studentMarks/totalMarks)*100;
    if(studentMarks >= 90) {
        return `Hey you got a A grade with ${percentage}%`;
    } else if(studentMarks >=80 && studentMarks < 90) {
        return `Hey you got a B grade with ${percentage}%`;
    } else if(studentMarks >=70 && studentMarks < 80) {
        return `Hey you got a C grade with ${percentage}%`;
    } else if(studentMarks >=60 && studentMarks < 70) {
        return `Hey you got a D grade with ${percentage}%`;
    } else {
        return 'Hey you just failed the exam. Chill out';
    }
}

let percentageOne = percentageCalc(undefined, 45);
console.log(percentageOne);