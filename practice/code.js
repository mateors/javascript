
// console.log("Hello and welcome to the JavaScript world of practice!");
// let grade, finalGrade, remainder, difference;
// grade=73;
// remainder=grade%5;
// difference=5-remainder;
// finalGrade=grade;

// if (difference<3 && grade>39){
//     finalGrade=grade+difference;
// }
// console.log(`${remainder}-${difference}-${finalGrade}`);

// let grades = [10, 73, 50, 67];
// for (const grd of grades) {
//     console.log(grd);
// }

// grades.forEach(element => {
//     console.log(element);
// });

function possibleChanges(usernames) {
    var ans = [];
    for (var i = 0; i < usernames.length; i++) {
        for (var j = 0; j < usernames[i].length - 1; j++) {

            console.log(`${usernames[i][j]}-${usernames[i][j+1]}`);
            if (usernames[i][j] > usernames[i][j + 1]) {
                ans.push("YES");
                break;
            }
        }
        if (ans.length == i) {
            ans.push("NO");
        }
    }
    return ans;
}


// console.log(typeof undefined);//“undefined”
// console.log(typeof null);

// console.log(undefined + 1); // NaN
// console.log(null + 1); // 1

// console.log(!!undefined); //false
// console.log(!!null); //false

// let greeting = "Hello my name is";
// let myname = "Mostain";
// let lastname = "Billah";
// let str = "As I have"
// let apples = 10;
// apples *= 5;
// let end= "apples";
// console.log(greeting, myname,lastname, str,apples, end);

function gradingStudents(grades) {
    // Write your code here
    let result=[];
    for (let x of grades){ //33

        let grade=x;
        let remainder=x%5; //3
        let diff=5-remainder; //5-3=2
    
        if (diff<3 && grade>=38){
            grade=x+diff;//38+2=40
        }
        result.push(grade);
    }
    return result;
}

// let res=gradingStudents([73,67,38,33]);
// console.log(res);


function sockMerchant(n, ar) {
    // Write your code here
    var hashmap = new Map();
    let result=0;

        for(let i=0; i<n; i++){

            let cval=ar[i];
            //console.log(hashmap,hashmap.keys());
            if (hashmap.has(cval)){
                let ev=hashmap.get(cval);
                //console.log("yesss",ev);
                hashmap.set(cval,ev=ev+1);
                //console.log(cval,"found cval",ev);
            }else{
               hashmap.set(cval,1);
               //console.log(cval,"not found so ","1");
            }
        }
        //console.log(hashmap);
        //console.log(typeof hashmap.keys());
        for (let key of hashmap.keys()){
            let val=hashmap.get(key);
            if (val>1){
                result+=Math.floor(val/2);
            }
            //console.log(hashmap.get(key));
        }
     return result;
}

//var hashmap = new Map();
// console.log(hashmap);
// hashmap.set(10,100);
// console.log(hashmap.get(10));
// console.log(hashmap.has(10));
// console.log(hashmap);
//[1,2,1,2,1,3,2]
//[10, 20, 20, 10, 10, 30, 50, 10, 20]
//console.log(sockMerchant(7, [1,2,1,2,1,3,2]));

//let pv={'U':1,'D':-1};
//console.log(pv['D']);

function countingValleys2(steps, path) {
    //let steps=8;
    //let path="UDDDUDUU";
    let pv={'U':1,'D':-1};
    let count=0;
    let vcount=0;
        
    for(let i=0; i<steps; i++){
        let step=path[i];
        let sv=pv[step];
        //console.log(step,sv);
        count=count+sv;
        //console.log(count);
        // if(count>0){
        //     vcount++;
        // }
        if(count==0){
            vcount++;
        }
    }
  return vcount-1;
}

function countingValleys(steps, path) {

    //https://www.youtube.com/watch?v=MMmFELo0QjM
    //let steps=8;
    //let path="UDDDUDUU";
    let vcount=0;
    let alt=0;
    for(let i=0; i<steps; i++){
        let step=path[i];
        if (step=='U'){
            alt++;
            if (alt==0){
                vcount++;
            }
        }else{
            alt--;
        }
    }
  return vcount;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));