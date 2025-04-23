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

console.log(getGrade(96)); // Output: 'A'
console.log(getGrade(82)); // Output: 'B'
console.log(getGrade(56)); // Output: 'F'