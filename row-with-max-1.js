let arr = [[1, 1, 1, 1],
[0, 0, 0, 0],
[0, 0, 1, 1],
[0, 0, 1, 1]];

function findMaxOne(){
    let noRow = 0,max=0 ,noCol =arr[0].length;
    let indexOfFirstOne;
    while(noRow<arr.length){
        indexOfFirstOne = findFirstOne(arr,noRow);
        if(indexOfFirstOne!=null) {
            let count= noCol - indexOfFirstOne.col;
            if(count>max) {
                max=count; 
                finalRow= noRow;    
        }
        }
        noRow++;
    }
    
     return finalRow>=0 ? finalRow: -1;
    
}

function findFirstOne(arr,row){
    let i=0,j=arr[row].length-1; 
    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(arr[row][mid]==1 && (mid==0 || arr[row][mid-1]==0)  ){
            return {row,col:mid}
        }else if(arr[row][mid]==1){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    return null;
}

console.log(findMaxOne());