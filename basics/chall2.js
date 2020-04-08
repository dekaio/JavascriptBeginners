function average (a,b,c){
    return (a+b+c)/3;
}
var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103, mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123, johnAv = average (johnScore1,johnScore2,johnScore3), mikeAv = average (mikeScore1, mikeScore2, mikeScore3), maryAvg = average (97, 134, 105);

if (johnAv >= mikeAv && johnAv >= maryAvg) {
    console.log('Winner is John');
}
else if (johnAv === mikeAv === maryAvg){
    console.log('It is a draw');
}
else if (mikeAv >= johnAv && mikeAv >= maryAvg) { 
    console.log('Mike is the winner!');
}
else{
    console.log('Mary is the winner' + johnAv+ "  " + mikeAv +' ' + maryAvg);
}
