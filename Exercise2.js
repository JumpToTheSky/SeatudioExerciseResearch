function giaithua(n){
    if(n<0){
        return undefined;
    }
    if(n==1 || n==0){
        return 1;
    }
    return n*giaithua(n-1);
}
function combination2a(k,n){
    return giaithua(n)/(giaithua(k)*giaithua(n-k));
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElementInArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function arrayDiff(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

console.log("to hop 3 tu 10 phan tu : ", combination2a(3,10));
console.log("so ngau nhien trong khoang 1 den 10 : ", randomBetween(1,10));
console.log("phan tu ngau nhien trong mang 1 : ", randomElementInArray(arr1));
console.log("phan tu cua mang 1 khong co trong mang 2 : ", arrayDiff(arr1, arr2));
