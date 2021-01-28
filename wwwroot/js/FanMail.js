
$("#submitButton").click(function () {
    //get input values
    var a = +$("#a").val();
    var gp = +$("#gp").val();
    var q = +$("#q").val();
    var ex = +$("#ex").val();
    var inty = +$("#int").val();
    var total = 0;
    var grade = "";

    //calculate total
    total = a * .50;
    total += gp * .10;
    total += q * .10;
    total += ex * .20;
    total += Math.floor(inty * .10);

    //determine letter grade 
    if (total >= 93) {
        grade = "A";
    }
    else if (total >= 90) {
        grade = "A-";
    }
    else if (total >= 90) {
        grade = "A-";
    }
    else if (total >= 87) {
        grade = "B+";
    }
    else if (total >= 83) {
        grade = "B";
    }
    else if (total >= 80) {
        grade = "B-";
    }
    else if (total >= 77) {
        grade = "C+";
    }
    else if (total >= 73) {
        grade = "C";
    }
    else if (total >= 70) {
        grade = "C-";
    }
    else if (total >= 67) {
        grade = "D+";
    }
    else if (total >= 63) {
        grade = "D";
    }
    else if (total >= 60) {
        grade = "D-";
    }
    else {
        grade = "E";
    }

    //output
    alert(total + "% \nGood Job! \nYou got a " + grade);
});