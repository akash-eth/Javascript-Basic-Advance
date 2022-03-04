// let percentageCalc = (totalMarks, studentMarks) => {
    
//     if(typeof(totalMarks) === 'number' && typeof(studentMarks) === 'number') {
//         let percentage = (studentMarks/totalMarks)*100;
//         if(studentMarks >= 90) {
//             return `Hey you got a A grade with ${percentage}%`;
//         } else if(studentMarks >=80 && studentMarks < 90) {
//             return `Hey you got a B grade with ${percentage}%`;
//         } else if(studentMarks >=70 && studentMarks < 80) {
//             return `Hey you got a C grade with ${percentage}%`;
//         } else if(studentMarks >=60 && studentMarks < 70) {
//             return `Hey you got a D grade with ${percentage}%`;
//         } else {
//             return 'Hey you just failed the exam. Chill out';
//         }
//     }
//     else {
//         throw Error('Make sure your args are a number')
//     }
// }

// try {
//     let percentageOne = percentageCalc('110', '76');
//     console.log(percentageOne);
// } catch(e) {
//     console.log(e.message);
// }

// refactored code can be:
let percentageCalc = (totalMarks, studentMarks) => {
    
    if(typeof(totalMarks) !== 'number' || typeof(studentMarks) !== 'number') {
        throw Error('Make sure your args are a number')
    }

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

try {
    let percentageOne = percentageCalc(110, 76);
    console.log(percentageOne);
} catch(e) {
    console.log(e.message);
}