function My_bubble_sort(array){ 
    let sorted = false;
    

    while(!sorted){
        for(let j = 0; j < array.length; j++){

            if(array[j-1] > array[j]){
                Swap(array, j-1, j);
            }
        }

        sorted = CheckIsSorted(array);
    }

    return array;
}

function CheckIsSorted(array){
    for(let i = 0; i < array.length; i++){
        
        if(!IsSorted(array[i], array[i -1], array[i +1])){
            return false;
        }
    }
    return true;
}

function IsSorted(number, before, after){

    if((number > before || isNaN(before)) &&
        (number < after || isNaN(after))) {
            return true;
        }
    else {
        return false;
    }
}

function Swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function BubbleSort(input){
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
        let output = My_bubble_sort(new_array);
    
        console.log(output);
    }
}

BubbleSort(process.argv);
