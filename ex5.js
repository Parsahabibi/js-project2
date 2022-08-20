let weight;
let height;
let bmi;
weight = prompt("please enter your weight");
height = prompt("please enter your height");
bmi = weight/(height*height);
if(bmi<18.5){
    alert(bmi);
    alert("underweight");
}else if(bmi<25 && bmi>=18.5){
    alert(bmi);
    alert("normal");
}else if(bmi<30 && bmi>=25){
    alert(bmi);
    alert("overweight");   
}else{
    alert(bmi);
    alert("obese");
}