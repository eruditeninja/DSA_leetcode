
function unionOfSortedArray() {
    let arr1=[1,2,3,4,5];
    let arr2=[2,3,4,4,5];
    let k = 0, l=0,m=0;
    let arr3 =[];

    while(k<arr1.length && l<arr2.length){
        if(arr1[k]<=arr2[l]){
            if(arr3[m-1]==arr1[k]) {
                k++;
                continue;   
            }
            if(arr1[k]==arr2[l])  l++;
            arr3[m++]=arr1[k++];
        }
        if(arr1[k]>arr2[l]){
            if(arr3[m-1]==arr2[l]) {
                l++;
                continue;
            }   
            arr3[m++]=arr2[l++];
        }
    }

    if(k!=arr1.length){
        while(k<arr1.length && arr3[m-1]!=arr1[k]){
            arr3[m++]=arr1[k++];
        }
    }
    if(l!=arr2.length){
        while(l<arr2.length && arr3[m-1]!=arr2[l]){
            arr3[m++]=arr2[l++];
        }
    }

    console.log(arr3);
}

unionOfSortedArray();



