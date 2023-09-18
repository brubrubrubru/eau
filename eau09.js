function MinMax(input1, input2){

    if(input1 == "" || input2 == "" ||
    input1 === undefined || input2 === undefined ||
    input1 === null || input2 === null ||
    isNaN(input1) || isNaN(input2)){
        console.log("Error");
    } else {
        let output ="";

        let value1 = parseInt(input1);
        let value2 = parseInt(input2);

        if(value1 < value2){
            ProcessLoop(value1, value2, output);
        } else if (value2 < value1){
            ProcessLoop(value2, value1, output);
        }
        else {
            console.log("arg 1 = arg 2");
        }
    } 
}

function ProcessLoop(first, second, output){
    output = first;
    for(let i = first + 1; i < second; i++){
        output += " " +  i;
    }
    console.log(output + " " + second);
}

MinMax(process.argv[2], process.argv[3]);