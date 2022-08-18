
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

//console.log(countingValleys(12, "DDUUDDUDUUUD"));


function findItem(arr){

    if(arr.length<3){
        return 0;
    }

    for(let i=0;i<arr.length; i++){

        let left=arr.slice(0,i);
        let right=arr.slice(i+1,arr.length);

        let lsum=sum(left);
        let rsum=sum(right);

        if(lsum>rsum){
            return "NO";
        }
        
        if(lsum===rsum){
            return "YES";
        }
    }
    return "NO";
}

function sum(nums){

    let sum=0;
    for(let i=0;i<nums.length; i++){
        sum+=nums[i];
    }
    return sum;
}

/*
Time Complexity: O(n)
*/
function balancedSums(arr) {

    // Write your code here
    for(let i=0;i<arr.length; i++){

        let left=arr.slice(0, i);
        let right=arr.slice(i+1, arr.length);

        let lsum=sum(left);//0
        // for(let j=0;j<left.length; j++){
        //     lsum+=left[j];
        // }

        let rsum=sum(right);
        //for(let j=0;j<right.length; j++){
            //rsum+=right[j];
        //}

        //console.log(i, arr[i], lsum, rsum);
        if(lsum>rsum){
            return "NO";
        }

        //console.log('>',p,left, arr[i], right);
        if(lsum===rsum){
            return "YES";
        }
    }
    return "NO";
}

//Binary version of it
/*
Time Complexity: O(n)
*/
function balancedSumsBin(arr) {

    // Write your code here
    let p=arr.length/2;
    let pc=0;

    while(pc<arr.length){

        let left=arr.slice(0, p);
        let right=arr.slice(p+1, arr.length);

        let lsum=sum(left);//0
        let rsum=sum(right);

        //console.log(i, arr[i], lsum, rsum);
        if(lsum>rsum){
            //return "NO";
            p--;
        }
        if(lsum<rsum){
            p++;
        }

        if(lsum===rsum){
            return "YES";
        }
        pc++;
    }

    return "NO";
}

//console.log(findItem([4,5,8,9]));//8
//console.log(findItem([5,7,6,4,3,2,3]));//6
//console.log(findItem([9,7,2,5,1,1]));//7
//console.log(findItem([0, 0, 2, 0]));//0

//console.log(balancedSums([1, 1, 4, 1, 1]));
//console.log(balancedSums([2, 0, 0, 0]));
//console.log(balancedSums([0, 0, 2, 0]));
//console.log(balancedSums([575, 426, 445, 772, 81, 447, 629, 497, 202, 775, 325]));
//console.log(balancedSums([5,7,6,4,3,2,3]));//6



let bigstr="1822 2612 1573 2578 2552 1863 970 959 1296 1379 1801 2613 1089 1572 2466 1482 1813 1538 1504 2217 1706 1273 1464 2200 1224 1599 1792 1809 983 1717 1797 2050 1533 2268 2300 2469 2343 1554 2764 2758 1680 2326 2433 1045 1890 1484 1285 1176 2503 2543 990 2104 1145 2390 1536 2032 1230 2529 1953 2640 2621 2115 1015 1134 1109 2509 954 1632 1465 2243 2418 1235 1953 1729 1575 1453 2593 2342 1093 1761 2203 2501 998 2279 1923 2750 1638 2176 2491 2014 1344 2342 2178 2696 2068 2620 2556 1686 1123 1966 1140 1077 1327 1539 2789 1928 2184 2620 2453 2517 1647 1830 1039 1512 1727 1332 1196 1249 2252 2444 1708 1820 2671 2562 1835 2235 2227 2503 2079 2527 1046 2535 2457 1140 2453 2060 1641 1083 941 939 2465 2055 2796 930 2087 2596 1276 2258 1927 1457 1615 1863 2405 2559 2148 2764 2416 1441 1343 2413 1624 1915 2068 1191 2044 2319 1321 2533 2183 1890 1854 1144 2315 1922 2543 1111 2193 1520 1123 2777 1070 2629 1098 1784 926 1355 2777 1166 1399 1876 1200 1301 2123 1995 2631 1201 1522 1541 1466 2199 2357 2059 2651 2483 2025 2258 1017 2683 1308 2706 1524 923 2518 1716 2399 1993 2379 2623 974 1845 2539 2672 2562 2808 2186 982 1716 1753 2347 1541 1232 2711 1572 2640 1164 1145 1083 2399 1246 2522 2483 2264 2220 1580 1874 1431 2592 2694 2277 1066 2495 1763 1407 1638 1846 2637 1193 1462 2341 1869 2170 2695 2083 2411 1622 2173 2618 1588 2323 2297 2804 1339 1559 1683 2088 1402 1115 2780 2197 2271 1407 2732 2629 1151 1179 2788 1716 1766 2223 2608 1840 1733 1951 2661 1668 1113 2188 1194 1019 2352 1799 2199 2047 1340 2200 2289 1744 2509 1321 1827 1807 1325 2173 2727 2480 988 1057 1081 2131 1443 1359 2577 1190 2505 1598 1707 1293 1120 2179 2493 1861 2744 1035 2369 2522 2504 1203 1422 1452 2047 989 957 1830 1520 2514 1115 1500 2611 2581 2574 1385 1142 1985 2050 1502 2465 1794 2773 2291 2792 2608 1952 2243 922 1210 1678 2218 1559 1667 1872 1866 2175 1826 1728 1547 2241 2626 1679 2370 2025 1875 2279 1432 2450 2744 2273 1087 2041 1079 2479 1274 1023 1976 1962 2250 1578 2381 1520 1211 983 2779 1647 1299 1955 1899 2216 2530 1004 1318 227 1489 1674 1829 1569 1270 936 1117 824 1570 818 667 1807 928 1555 1264 1087 1526 823 1949 1962 1178 1364 1098 709 1223 1633 1832 1608 1910 1045 1833 1201 1602 678 1632 1807 1037 1212 1310 1762 1843 796 1502 1171 887 868 1810 1259 1747 1927 751 881 1809 1027 1567 1779 1057 915 1307 1194 880 1271 1742 1579 1034 1165 1512 1899 1613 1310 1785 1909 686 1102 1756 1951 1177 1216 1917 1639 1311 1785 750 1206 1426 1484 1066 1209 1868 1672 1946 970 1530 1821 1204 1865 1535 1414 1193 1741 756 1882 1052 1219 850 975 1092 1283 1860 714 913 1744 777 1547 1121 1757 858 1415 1046 1806 1878 1822 1226 749 1122 1593 827 1379 1716 1421 1152 1128 825 1539 818 1012 1904 1075 1399 914 1227 1243 1569 1360 1073 687 994 981 1852 1922 1361 1300 783 790 1471 1329 678 835 1341 951 889 1409 1102 1494 1325 1775 1793 1906 935 1804 951 1584 933 1966 1864 1655 1288 1096 1866 1244 1397 1254 1080 1963 957 1912 1167 1061 1264 1803 837 1676 1873 1125 1041 1807 1877 1191 737 1860 1486 1749 1604 995 1334 1104 1195 681 1144 1238 1167 1440 1176 1190 1871 1538 843 1210 815 1185 737 1339 1724 1735 1530 910 844 962 1068 832 1010 1868 1076 1775 1712 1664 1289 1858 1670 1965 1686 1962 983 1778 1445 1227 1593 1910 1918 1114 1043 1605 1417 1346 1554 1074 1901 1736 1360 936 1052 762 1067 1200 707 785 1510 1287 1742 1214 1021 1403 1628 870 987 1519 1820 1609 1057 1803 984 1053 1316 1323 1006 984 1809 1570 954 1596 698 1587 825 1915 1714 1730 1160 1325 1646 1789 1391 1870 1265 1145 953 1762 1635 1061 702 1355 715 1457 1860 1225 1673 913 996 857 1180 847 1102 816 1828 1866 797 1911 1961 1575 880 822 1266 663 1267 1213 1880 807 831 902 1114 706 1274 1580 786 1840 1808 844 949 1951 1929 1429 973 1957 1727 1573 846 1197 897 756 992 1229 1159 1613 1548 1423 1250 1040 704 898 1767 832 1726 865 903 1152 1613 1367 1016 765 763 1468 1136 1326 1407 667 1231 968 1604 1445 1845 1439 1673 770 1846 1345 1173 1068 1823 1534 1746 980 1024 1700 1633 1030 881 1314 1075 1816 1537 1225 710 933 1310 1200 796 940 1450 1898 1859 1881 1318 1175 1590 1093 1409 1582 1757 1963 1093 1272 1304 1718 1206 699 1781 1076 1140 1520 1704 1409 1002 1384 802 1681 1038 1737 855 899 1547 1542 984 1386 1633 1549 875 1539 806 1567 789 1370 1387 1013 697 1780 1065 1667 1542 1509 1450 1178 905 1088 1345 1098 1397 913 931 862 1788 1392 1426 1550 1336 1375 1242 1315 1073 1350 1006 1463 992 1020 871 1561 936 985 1054 899 1887 1394 1286 1288 925 755 1000 1028 813 1409 904 1848 1133 1081 1429 1928 1615 1337 1386 1039 1855 1157 977 1296 976 975 1337 1431 1614 1287 1310 1587 808 684 915 1142 1575 1127 1424 1491 1941 1786 706 1508 880 1007 1475 1799 868 1458 1659 1966 680 1098 1680 1316 1711 1624 1264 1643 946 810 1421 1453 993 866 1533 963 874 1452 820 1325 1577 1250 1929 1560 1061 1498 911 935 837 924 1201 1482 1688 1254 695 1921 937 748 772 1514 727";
//console.log(bigstr.split(' ').length);
//let starr=bigstr.split(' ');

// for(let i=0;i<starr.length;i++){

//     let num=parseInt(starr[i], 10);
//     console.log(i,starr[i], typeof num);
// }

const arr = bigstr.split(' ').map(arrTemp => parseInt(arrTemp, 10));
console.log(balanceSumsA([5,7,6,4,3,2,3]));


/*
Time Complexity: O(n)
*/
function balanceSumsA(arr){

 let sum = arr.reduce( (acc, val) => acc+val);
 console.log('startInitial',sum);

 let leftSum=0;
 for(let i=0; i < arr.length; i++){
    
    sum -= arr[i];
    console.log(i, arr[i], sum, leftSum);
    if(sum===leftSum){
        return "YES";
    }
    leftSum += arr[i];
    //console.log(i,arr[i], sum, leftSum);
 }
 return "NO";

}
