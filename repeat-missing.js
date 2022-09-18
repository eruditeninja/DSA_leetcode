
let arr = [3,1,1,4];
let obj={},repeatedIndex,sum=0,n=arr.length;

for (let index = 0; index < arr.length; index++) {
        if(obj[arr[index]]) {
            repeatedIndex=index;
        }else{
            obj[arr[index]]= 1;
            sum+=arr[index];
        }
    }

let nSum = (n*(n+1))/2;
console.log('repeated element',arr[repeatedIndex]);
console.log('Missing element',nSum-sum);