function fibonnaci(index){

    let valuesArray = [];
    if(index === null || index == "" || index < 0 || isNaN(index)){
        console.log(-1);
    } else 
    {
        for(let i = 0; i <= index; i++){
            if (i == 0){
                valuesArray.push(i);
            } else if (i == 1) {
                valuesArray.push(i);
            } else {
                valuesArray.push(valuesArray[i-1] + valuesArray[i-2]);
            }
        }
    
        console.log(valuesArray[index]);
    }
}

fibonnaci(process.argv[2]);