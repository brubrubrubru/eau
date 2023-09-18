function CapitalsWords(input){
    if(input === null || input == "" || input < 0 || !isNaN(input)){
        console.log("error");
    }

    let inputString = InputToChar(input);

    let output = "";
    let Capitalize = true;

    for(let i = 0; i < inputString.length; i++){
        if(Capitalize && 
            IsMinimalLetter(inputString, i)){
            output += ToCapital(inputString, i);
        } else {
            output += inputString[i];
        }
        
        if (inputString[i] === " " || 
        inputString[i] === "\n"){
            Capitalize = true;
        } else {
            Capitalize = false;
        }
    }

    console.log(output);
}

function InputToChar(input){
    let output = "";

    // create a new array without the node arg and the file name
    for(let i = 0; i < input.length; i++){
        if(i > 1){
            output += input[i] + " ";
        }
    }

    return output;
}

function ToCapital(input, i){
    return String.fromCharCode(input.charCodeAt(i) - 32);
}

function IsMinimalLetter(input, i){
    return 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122;
}

CapitalsWords(process.argv);