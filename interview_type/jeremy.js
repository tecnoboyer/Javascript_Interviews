function datetoSchedule(){
    var d = new Date();
    if (d.getHours()< 12)  {
        return "morning"
    } else if (d.getHours() < 18)  {
        return "afternoon"
    } else {
        return "evening"
    }   
}
// console.log("The interview is scheduled for the " + datetoSchedule() + ".");
console.dir( datetoSchedule());