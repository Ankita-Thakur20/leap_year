const year="2000";
if(year %4===0){
   

  if (year %100===0){
   
    
    if (year %400===0){

        console.log("yes its a leap year");

    }
    else{
        console.log("Its not a leap year");
    }
} else{
    console.log("Its a leap year");
}

} else{
    console.log("Its not a leap year");
}
