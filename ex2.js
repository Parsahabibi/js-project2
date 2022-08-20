let number , sum=0 , a;
number = prompt("please enter your desired number:");
number = Number(number);
for(a=1 ; a<number ; a++){
    if(number%a===0){
        sum = sum+a;
    }
}
if(sum===number){
    alert("yes");
}else{
    alert("no");
}