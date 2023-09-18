function AbsoluteMin(arguments){

    let argsOK = true;
    let lower;
    let check;

    arguments.forEach((element, index) => {
        if(index > 1){

            arguments[index] = checkNegativ(element);
            if((isNaN(arguments[index]) || 
                arguments[index] == "" ||
                arguments[index] === null ||
                arguments[index] === undefined)){
                    argsOK = false;
                    console.log("Arguments error");
            }
        }
    });

    if(argsOK){
        for(let i = 2; i < arguments.length - 1; i++){
            let checkOne = arguments[i] - arguments[i+1];
            let checkTwo = arguments[i+1] - arguments[i];

            if(checkOne < checkTwo && (lower === undefined || checkOne < lower)){
                lower = checkOne;
            }
            else if(checkTwo < checkOne && (lower === undefined || checkTwo < lower)){
                lower = checkTwo;
            }
        }
    
        console.log(checkNegativ(lower));
    }
}


function GetLower(check, lower){
    if(lower === undefined){

    }
    let newCheck = check - lower;
    if(newCheck < lower){
        lower = newCheck;
    }

};

function checkNegativ(value){;
    if(value[0] === '-'){
        return value.substring(1);
    } else if (value < 0) {
        return value * (-1);
    } else {
        return value;
    }
}

AbsoluteMin(process.argv);