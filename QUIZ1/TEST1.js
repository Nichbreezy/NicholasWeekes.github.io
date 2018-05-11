function DisplayTEST1()
{

  var Name= document.getElementById("Name").value;
  var Weight= document.getElementById("pounds").value;
  var Height= document.getElementById("inches").value;
  var bmi = (Weight)/(Height*Height)*703;
var screening;
if( bmi<= 18.5)
{
  screening = "bmi " + "is " + "underweight";
}
else if (bmi > 18.5 &&  bmi< 24.9)
{
  screening = "bmi " + "is " + "healthy";
}
else if(bmi> 25 && bmi < 24.9)
  {
    screening= "bmi " + "is " + "overweight";
  }
else (bmi > 30 && bmi ==30)
{
  screening = "bmi " + "is " + "obese";
}

var TEST1=  Name + " ,this is your BODY MASS INDEX : " +bmi + screening;
document.getElementById("OUTPUT").innerHTML=TEST1;

}
