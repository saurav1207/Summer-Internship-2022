function examStatus(marks, examType) {
    if (marks >= 90) {
        grade = "A+";
        if (examType === "Final" && grade === "A+"){
            return true   
        }
        else{
            return false
        }
    }
}
console.log(examStatus(89,"notfinal"));
console.log(examStatus(92,"Final"));


/*
function examStatus(marks,examType) {
    if(89<=marks<=100) {
        grade = "A+";
        if (examType === "notFinal" && grade === "A+"){
            return true 
        }
        else{
            return false
        }
    }  
    else if(marks>=90){
        grade = "A+";
        if (examType === "Final" && grade === "A+"){
            return true
        }
        else{
            return false
        }
    }   
}
console.log(examStatus(92, "not Final"));
console.log(examStatus(92, "Final"));
console.log(examStatus(80, "not Final"));
console.log(examStatus(88, "Final"));
*/