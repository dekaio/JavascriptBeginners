var billPropsJohn = {
    billVals : [124, 48, 268, 180, 42],
    tips : [],
    total : [],
    tipCalc : function (val){
    if (val < 50) return val*.20;
    else if (val >= 50 && val < 200) return val*.15;
    else return val * .10;
    },
    billCalc : function (){
        for (var i =0; i < this.billVals.length; i++){
            this.tips.push(this.tipCalc(this.billVals[i]));
            this.total.push(this.tips[i] + this.billVals[i]);
        }
        return [this.tips, this.total];
    }
    
};

finalJohn = billPropsJohn.billCalc();
console.log(finalJohn[0], finalJohn[1]);

var billPropsMark = {
    billVals : [77, 475, 110, 45],
    tips : [],
    total : [],
    tipCalc : function (val){
    if (val < 100) return val*.20;
    else if (val >= 100 && val < 300) return val*.10;
    else return val * .25;
    },
    billCalc : function (){
        for (var i =0; i < this.billVals.length; i++){
            this.tips.push(this.tipCalc(this.billVals[i]));
            this.total.push(this.tips[i] + this.billVals[i]);
        }
        return [this.tips, this.total];
    }
    
}
finalMark = billPropsMark.billCalc();
console.log(finalMark[0], finalMark[1]);
/*
var billPeeps = [billPropsJohn, billPropsMark]
var avg = [];
for (var i = 0, i < billPeeps.length; i++){
    var tot = 0
    for (var j=0, j < billPeeps[i].billVals.length; j++){
        tot += billPeeps[i].billVals[j];
    }
    avg.push(tot/billPeeps[i].billVals[j]);
}
*/

function avgBill(person){
    var tot = 0;
   for (var j = 0; j < person.billVals.length; j++){
       tot += person.billVals[j];
   } 
    return tot/person.billVals.length;

}
avgBill(billPropsJohn) > avgBill(billPropsMark) ? console.log('John payed more') : console.log('Mark payed more');







































