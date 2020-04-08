var Mark = {
    name: 'Mark',
    mass: 80,
    height: 1.78,
    bmi: function (){
        //console.log(this.mass);
        this.bmi = (this.mass/this.height^2);
        return this.bmi;
}
}
var John = {
    name: 'John',
    mass: 100,
    height: 1.78,
    bmi: function (){
       // console.log(this.mass);
        this.bmi = this.mass/(this.height)^2;
        return this.bmi;
}
}
Mark.bmi(); John.bmi();
console.log(Mark);
console.log(John);
if (Mark.bmi > John.bmi){
    console.log('Mark has higher BMI '+Mark.bmi+' '+John.bmi);
} else if (John.bmi > Mark.bmi){
    console.log('John has higher BMI '+Mark.bmi+' '+John.bmi);
} else if (John.bmi === Mark.bmi){
    console.log('John and Mark have the same BMI '+Mark.bmi+' '+John.bmi);
}