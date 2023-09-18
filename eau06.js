function CapitalsTwo(input){
    if(input === null || input == "" || input < 0 || !isNaN(input)){
        console.log("error");
    } else {
        let output = "";
        let toAdd = "";
        let value = "";
        for(let i = 0; i < input.length; i++){
            if(i % 2 === 0 &&
                97 <= input.charCodeAt(i) &&
                input.charCodeAt(i) <= 122){
                value = String.fromCharCode(input.charCodeAt(i) - 32);
                output = output + value;
            } else {
                toAdd = input[i] + "";
                output = output + toAdd;
            }
        }

        console.log(output);
    }
}

CapitalsTwo(process.argv[2]);