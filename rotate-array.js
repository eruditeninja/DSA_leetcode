

let arr = [-1];
let arr2 =[];
let k =2%1;
let m=arr.length-k;
while(m<arr.length){
    arr2.push(arr[m]);
    m++;
}
let n = arr.length-k-1;
while(n>=0){
    arr[n+k]=arr[n];
    n--;
}
for (let index = 0; index < arr2.length; index++) {
        arr[index]=arr2[index];    
}
console.log(arr);


