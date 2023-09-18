function numbersCombination() 
{
    
    let arrayOfNumbers = ['012'];
    let stringNumber = "";
    
    for(let i = 13; i < 1000; i++) 
    {
        stringNumber = toString(i);
        let toAdd = true;

        if(i < 100){
            stringNumber = '0' + stringNumber;
        }

        if(checkDistinct(stringNumber)){
            arrayOfNumbers.forEach(e => {
                if(checkNumberCombinationExist(e, stringNumber))
                {
                    toAdd = false;
                }
            });
        
            if(toAdd){
                arrayOfNumbers.push(stringNumber);
            }
        } 
    }

    console.log(arrayOfNumbers);
}

function toString(number){
    return number + "";
}

function checkValue(stringNumber, arrayOfNumbers){
    arrayOfNumbers.forEach(e => {
        if(checkNumberCombinationExist(e, stringNumber))
        {
            return false;
        }
    });

    return true;
}

function checkDistinct(stringNumber){
    let set = new Set(stringNumber);
    return stringNumber.length === set.size;
}

function checkNumberCombinationExist(e, stringNumber){
    if(e.includes(stringNumber.charAt(0)) &&
        e.includes(stringNumber.charAt(1)) && 
        e.includes(stringNumber.charAt(2)))
        {
            return true;
        }
        
    return false;
}

numbersCombination();
console.log(checkNumberCombinationExist('012', '103'));