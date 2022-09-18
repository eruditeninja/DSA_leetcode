let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

let end = arr[0].length*arr.length, start =0;

function checkForEle(){
    try {

        while(start<=end){
            const mid = Math.floor((start+end)/2);
            const obj = calCulateIndex(mid,arr[0].length,arr.length);
            // console.log(obj);
            if(arr[obj.row][obj.col]==target) return true;
        
            arr[obj.row][obj.col]>target ? end-- : start++;
        }
        return false;        
    } catch (error) {
        console.log(error);
    }
    
}

function calCulateIndex(val ,col,row){
    // console.log(val,col);
    row = (Math.floor(val/col))%row;
     col = val%col;
    return {row,col};

}

console.log(checkForEle());