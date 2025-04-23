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



function hasPassingGrade(score) {
    if(getGrade(score)==='F'){
        return false
    }else{
        return true
    }
  
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));