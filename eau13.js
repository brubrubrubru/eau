function My_select_sort(array){

    // iterate through the array
    for(let i = 0; i < array.length; i++){

        let smallerIndex = i;
        for(let j = i + 1; j < array.length; j++){

            if(array[j] < array[smallerIndex]){
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

function SelectSort(input){
    let error = false;
    let new_array = [];

    // create a new array without the node arg and the file name
    for(let i = 0; i < input.length; i++){
        if(i > 1){
            if(isNaN(input[i])){
                console.log("Error");
                error = true;         
            }
            else {
                new_array[i-2] = Number(input[i]);
            }
        }
    }

    if(!error){
        let output = My_select_sort(new_array);
    
        console.log(output);
    }
}

SelectSort(process.argv);