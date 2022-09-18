
let arr =[0,0,0];
let max = 0;
for (let index = 0; index < arr.length; index++) {
    let tempCount=0;
    while (arr[index]) {
        tempCount++;
        index++;
    }
    if(tempCount>max) max= tempCount;
}
console.log(max);