
function removeDuplicate(arr){
    
    let startIndex =0,currentVal;

    for (let index = 0; index < arr.length; index++) {
        
        currentVal = arr[index];
        
        while (arr[index]==arr[index+1]) {
            index++;
        }
        arr[startIndex++]=currentVal;
    }
    console.log(arr);
    return startIndex;
}

console.log(removeDuplicate(
    [1,2,2,3]
    )
);