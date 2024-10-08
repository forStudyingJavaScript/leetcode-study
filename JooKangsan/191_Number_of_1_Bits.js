/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let byte = n.toString(2)
    let nArr = byte.split('')
    let count = 0
    for(let i = 0;i<nArr.length; i++){
        if(nArr[i]=== "1") count+=1
    }
    return count;
};