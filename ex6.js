let a,b,point;
point = prompt("Enter your score");
alert("Choose one of the options below\n1.Not going on a trip\n2.Seven day trip\n3.A trip of one to six days or more than seven days");
a = prompt("enter your desired number");
a = Number(a);
if(a===1){
    alert("Your score is equal to 20");
}else if(a===2){
    alert("Your score is equal to 0");
}else{
    b = prompt("Enter the number of days of your trip");
    b = Number(b);
    if(b===1){
        point = point-1;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        }     
    }else if(b===2){
        point = point-2;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===3){
        point = point-3;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===4){
        point = point-4;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===5){
        point = point-5;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===6){
        point = point-6;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===7){
        alert("Your score is equal to 0");   
    }else if(b===8){
        point = point-8;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===9){
        point = point-9;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===10){
        point = point-10;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===11){
        point = point-11;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===12){
        point = point-12;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }else if(b===13){
        point = point-13;
        if(point<0){
            alert("0");
        }else{
            alert(`Your score is equal to ${point}`);
        } 
    }
}