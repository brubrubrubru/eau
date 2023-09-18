function SearchIndex(arguments){

    let toFound = arguments[arguments.length - 1];
    let founded = false;

    for(let i = 0; i < arguments.length - 1; i++){
        if(toFound === arguments[i]){
            console.log(i);
            founded = true;
            break;
        }
    }

    if(!founded){
        console.log("-1");
    }

}

SearchIndex(process.argv.slice(2));