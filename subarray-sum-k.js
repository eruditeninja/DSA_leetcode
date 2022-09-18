
let arr =[10, 2, -2, -20, 10],end=-1,totalCount=0;
let k=-10,maxCount=0;
let sum=0;

for (let start = 0; start < arr.length; start++) {
    
    while(( arr[end+1] +sum<=k) && end+1<arr.length ){
        sum+=arr[++end];
    }

    if(sum==k) {
        totalCount++;
        maxCount = end-start+1 > maxCount? end-start+1:maxCount; 
    }
    sum-=arr[start];
}

console.log('count',maxCount,totalCount,'totalCount');

// Input : arr[] = {10, 2, -2, -20, 10}, k = -10
// Output : 3
// Explanation: Subarrays: arr[0…3], arr[1…4], arr[3..4] have a sum exactly equal to -10.

// Input : arr[] = {9, 4, 20, 3, 10, 5}, k = 33

