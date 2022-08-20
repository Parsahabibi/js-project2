let number;
let a , b;
number = prompt("enter your desired number");
for(a=0 ; a<number/2 ; a++){
    b = a*a;
    if(b>number){
        alert(`The first number whose square is greater than your number is ${a}`);
        break;
    }
}
