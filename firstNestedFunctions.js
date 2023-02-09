function printCertificate (grade, namesArray) {
    let formattedGrade = formatGrade(grade);
    let formattedName = mergeName(namesArray);
}
    console.log(formattedGrade);
    console.log(formattedName);

printCertificate(5.25, ['Evi','Hristova']);

function mergeName(namesArr) {
    return namesArr[0] + ' ' + namesArr[1];
}

function formatGrade (grade) {
    let gradeText ='';
    if (grade < 3) {
        gradeText = 'Fail';
    } else if (grade < 3.5) {
        gradeText = 'Poor';
    } else if (grade < 4.5) {
        gradeText = 'Good';
    } else if (grade < 5.5) {
        gradeText = 'Very good';
    } else if (grade <= 6) {
        gradeText = 'Excellent';
    }
    
    let gradeValueText = grade < 3 ? '2' : grade.toFixed(2);
    console.log(`${gradeText} (${gradeValueText})`);
}