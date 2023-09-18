function StringInString(value, search){

    if(value === null || value == "" || value == undefined ||
        search === null || search == "" || search == undefined)
    {
        console.log("error");
    } else {

        let str1 = value + "";
        let str2 = search + "";
        let found = false;

        for(let i = 0; i <= str1.length; i++){
            let indexCount = str2.length;
    
            if(found){
                break;
            }

            for(let y = 0; y <= str2.length; y++){
                if(str1[y] == str2[y]){
                    indexCount -=1;
    
                    if(indexCount == 0){
                        console.log("True");
                        found = true;
                        break;
                    }
                } else {
                    break;
                }
            }
        }
        if(!found){
            console.log("False");
        }
    }
}

StringInString(process.argv[2], process.argv[3]);