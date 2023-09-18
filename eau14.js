// compare first char 
// if their are equal compare second char

function My_ascii_sort(array){

    // iterate through the array
    for(let i = 0; i < array.length; i++){
        let smallerIndex = i;
        for(let j = i + 1; j < array.length; j++){

            if(array[j].charCodeAt(0) < array[smallerIndex].charCodeAt(0)){
                smallerIndex = j;
            }
        }
        if(i != smallerIndex){
            Swap(array, i, smallerIndex);
        }
    }

    return array;
}


function Swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function AsciiSort(input){
    let error = false;
    let new_array = [];

    // create a new array without the node arg and the file name
    for(let i = 0; i < input.length; i++){
        if(i > 1){
            new_array[i-2] = input[i];
        }
    }

    if(!error){
        let output = My_ascii_sort(new_array);
    
        console.log(output);
    }
}

AsciiSort(process.argv);