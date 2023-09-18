function  NumbersOnly(input){

    let numberOnly = true;
    for (let i = 0; i < input.length; i++){
        if(!IsNumber(input, i)){
            numberOnly = false;
            break;
        }
        console.log(i);
    }

    console.log(numberOnly);
}

function IsNumber(input, i){
    return 48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57;
}

NumbersOnly(process.argv[2]);