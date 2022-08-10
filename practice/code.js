
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


console.log(typeof undefined);//“undefined”
console.log(typeof null);

console.log(undefined + 1); // NaN
console.log(null + 1); // 1

console.log(!!undefined); //false
console.log(!!null); //false

let greeting = "Hello my name is";
let myname = "Mostain";
let lastname = "Billah";
let str = "As I have"
let apples = 10;
apples *= 5;
let end= "apples";
console.log(greeting, myname,lastname, str,apples, end);