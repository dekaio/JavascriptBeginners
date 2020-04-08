function tipCalculator(array){
    var tip, total, tipArr = [], totalArr = [];
    for (var i = 0; i<array.length; i++ ){
        //console.log(array[i])
        if (array[i] < 50){
           // tip = val * .2;
            //total = val + tip;
            tipArr.push(array[i] * .2);
            totalArr.push(array[i] + array[i] * .2);
            //console.log(tipArr);
            
        } else if (array[i] >= 58 && array[i]<=200) {
            tipArr.push(array[i] * .15);
            totalArr.push(array[i] + array[i] * .15);
        } else{
            tipArr.push(array[i] * .10);
            totalArr.push(array[i] + array[i] * .10);
        }
    }
   // console.log(tipArr, totalArr);
    return [tipArr, totalArr];
}
var tipArr = [], totalArr = [];
bills = [124, 48, 268];
final = tipCalculator(bills)
console.log(final[0], final[1])
