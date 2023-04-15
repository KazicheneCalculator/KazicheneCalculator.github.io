
function calculate() {
    var t1_new = parseFloat(document.getElementById("t1_new").value);
    var t1_old = parseFloat(document.getElementById("t1_old").value);
    var t2_new = parseFloat(document.getElementById("t2_new").value);
    var t2_old = parseFloat(document.getElementById("t2_old").value);
    var first_multiplier = parseFloat(document.getElementById("1st_multiplier").value);
    var second_multiplier = parseFloat(document.getElementById("2nd_multiplier").value);
    var third_multiplier = parseFloat(document.getElementById("3rd_multiplier").value);
    var fourth_multiplier = parseFloat(document.getElementById("4th_multiplier").value);
    var fifth_multiplier = parseFloat(document.getElementById("5th_multiplier").value);
    var sixth_multiplier = parseFloat(document.getElementById("6th_multiplier").value);
    
    var day_energy = t1_new - t1_old;
    var night_energy = t2_new - t2_old;
    var combination = day_energy + night_energy;
    
    var result = 0;

    result += day_energy * first_multiplier;
    result += night_energy * second_multiplier;
    result += combination * third_multiplier;
    result += combination * fourth_multiplier;
    result += combination * fifth_multiplier;
    result += combination * sixth_multiplier;
    result *= 1.2;


    console.log(combination);
    document.getElementById("result").innerHTML = result.toFixed(2) + "лева."
}