let a,b,c;
a = prompt("please enter your first number");
b = prompt("please enter your second number");
c = prompt("please enter your third number");
if(a**2==(b**2 + c**2)){
    alert("Yes");
}else if(b**2==(a**2 + c**2)){
    alert("yes");
}else if(c**2==(a**2 + b**2)){
    alert("Yes");
}else{
    alert("no");
}