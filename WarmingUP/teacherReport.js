function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
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
        console.log(`Class average:${av}. Your grade: ${studenGrade}. You failed the course.`)
    }else{
        console.log(`Class average:${av}. Your grade: ${studenGrade}.You passed the course. `)
    }
}

studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);