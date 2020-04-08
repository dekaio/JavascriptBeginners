function bmiCalc(mass,height)
{
    return mass/height^2;
}
var markMass = 70, markHeight = 1.72, johnMass = 68, johnHeight = 1.80;
var greater = bmiCalc(markMass, markHeight) > bmiCalc(johnMass, johnHeight);
console.log('Is Mark\'s BMI greater than John\'s?' + greater);
