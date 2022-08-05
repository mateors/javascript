## Algorithms (Divide & conquer)
Divide & conquer isn’t a simple algorithm that you can apply to a problem. Instead, it’s a way to think about a problem.


### Recursion
> When you’re writing a recursive function involving an array, the base case is often an empty array or an array with one element.

> When you write a recursive function, you have to tell it when to stop recursing. hat’s why every recursive function has two parts: the base case, and the recursive case. he recursive case is when the function calls itself. he base case is when the function doesn’t call itself again … so it
doesn’t go into an ininite loop.


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
### Explanation:
1. The function takes in an array of numbers.
2. If the array is empty, it returns 0.
3. If the array has only one element, it returns that element.
4. If the array has more than one element, it returns the first element plus the sum of the rest of the elements.


### Time Complexity: O(n)

### usage
```
let result=recursionSum([2,6,10]);
console.log(result); // 18
```
