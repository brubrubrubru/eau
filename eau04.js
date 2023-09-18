function firstNumber(value) {   
    if(value === null || value == "" || value < 0 || isNaN(value)){
        console.log("error");
    } else { 
        if(isFloat(value)){
            value = Math.ceil(value);
        } else {
            value += 1;
        }

        for(let i = 2; i <= value; i++)
        {
            if(value % i === 0)
            {
                if(i == value){
                    console.log(value);
                    break;
                } else {
                    value +=1;
                    i = 2;
                }
            }      
        }
    }
} 

function isFloat(n) {
    return n % 1 !== 0;
}

firstNumber(process.argv[2]);