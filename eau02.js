function reverseArgs(args, size){

    if(size < 3){
        // error
        console.log("error");
    }
    for(let i = size -1; i >= 2; i--)
    {
        console.log(args[i]);
    }
}

reverseArgs(process.argv, process.argv.length);