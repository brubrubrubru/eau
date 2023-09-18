function CapitalsWords(input){
    if(input === null || input == "" || input < 0 || !isNaN(input)){
        console.log("error");
    }

    let output = "";
    let ChangeNext = true;

    console.log("Is minimal : " + IsMinimalLetter(input, 0));
    for(let i = 0; i <= input.length; i++){
        if(ChangeNext && 
            IsMinimalLetter(input, i)){
            output += output + ToCapital(input, i);
        } else {
            output += output + input[i];
        }
        
  
        console.log("ToCapital : " + ToCapital(input, i));

        if (input[i] !== " "){
            ChangeNext = false;
        }
    }

    // console.log(output);
}

function ToCapital(input, i){
    return String.fromCharCode(input.charCodeAt(i) - 32);
}
function IsMinimalLetter(input, i){
    return 97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122;
}
CapitalsWords(process.argv[2]);