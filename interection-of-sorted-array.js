
function intersectionOfSortedArray() {
    let arr1=[1,2,3,3,4,5,6];
    let arr2=[3,3,5];
    let k = 0, l=0,m=0;
    let arr3 =[];

    while(k<arr1.length && l<arr2.length){
        
        if(arr1[k]=arr2[l]){
            arr3[m++]=arr1[k];
            k++;l++;
        }

        if(arr1[k]<arr2[l]){
            k++;
        }
        if(arr1[k]>arr2[l]){
            l++;
        }
    }

    console.log(arr3);
}

intersectionOfSortedArray();



