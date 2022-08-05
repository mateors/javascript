## Algorithms

/*
1. The function takes in an array of numbers.
2. If the array is empty, it returns 0.
3. If the array has only one element, it returns that element.
4. If the array has more than one element, it returns the first element plus the sum of the rest of the elements.
*/
/*
Time Complexity: O(n)
*/
```js
function recursionSum(arrs){
    if (arrs.length===0){
        return 0
    }else if (arrs.length==1){
        return arrs[0]
    }else{
        return arrs[0]+recursionSum(arrs.slice(1))
    }
}
```

### usage
```
let result=recursionSum([2,4,6,10]);
console.log(result);
```
