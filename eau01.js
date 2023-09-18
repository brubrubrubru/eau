function numbersCombinations() 
{
    let numbersDisplay = [];
    let iStringNumber = "";
    let yStringNumber = "";

    for(let i = 0; i < 100; i++){
        for(let y = i + 1; y < 100; y++){
            iStringNumber = toString(i);
            if(i < 10){
                iStringNumber = '0' + iStringNumber;
            }

            yStringNumber = toString(y);
            if(y < 10){
                yStringNumber = '0' + yStringNumber;
            }

            numbersDisplay.push(iStringNumber + " " + yStringNumber);
        }
    }

    console.log(numbersDisplay);
}

function toString(number){
    return number + "";
}

numbersCombinations();