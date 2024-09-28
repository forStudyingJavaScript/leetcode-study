var containsDuplicate = function(nums) {
    // Set은 중복되지 않는 고유한 값들의 집합을 저장하는 객체
    let seen = new Set();
    for (let num of nums){
        if (seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return false
};