function shiftZeros(){
    let arr =[1];
    let k;
    for (let index = 0; index < arr.length; index++) {
       
        if(arr[index]==0 && !(k>=0)) k=index;
        if(arr[index]!=0 && k>=0){
            arr[k++] = arr[index];
            arr[index] =0;
        }
    }
    console.log(arr);
}

shiftZeros();