function getGrade(score) {
    if (score == 100) {
        return 'A++'
    } 
    if (90 <= score && score <= 99) {
        return 'A'
    }
    if (80 <= score && score <= 89) {
        return 'B'
    }
    if (70 <= score && score <= 79) {
        return 'C'
    }
    if (60 <= score && score <= 69) {
        return 'D'
    }
    if (0 <= score && score <= 59) {
        return 'F'
    }
}


function getAverage(totalScores){
    let sum=0;
    totalScores.forEach(elem=>{
        sum=sum+elem

    });

    return  sum / totalScores.length;


}




function studentMsg(totalScores, studentScore) {
    let studenGrade= getGrade(studentScore);
    let av= getAverage(totalScores);
    if(studenGrade==='F'){
        return ( `Class average: ${av}, Your grade: ${studenGrade}. You reprove the course.`)
    }else{
        return ( `Class average: ${av}, Your grade: ${studenGrade}.You passed the course. `)
    }

    
    }
    

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 70));