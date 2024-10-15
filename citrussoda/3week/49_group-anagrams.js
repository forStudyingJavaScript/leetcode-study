/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let answer = {};

  for (let str of strs) {
    let key = str.split('').sort().join('');
    if (!answer[key]) {
      answer[key] = [];
    }
    answer[key].push(str);
  }

  return Object.values(answer);
};

// 원래 하려던 접근 :
// 1. 각 알파벳이 들어있는 객체를 만들어서
// 2. 객체 비교는 strinfigy로 같은 걸 체크해서
// 3. 출력하면 되지 않을까?
// 결과 => 시간초과...

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//     let strsAlpha = []
//     let flagArr = Array.from({ length: strs.length }, () => 0)

//     for(let i = 0; i < strs.length; i++) {
//         let obj = {}
//         let sortedObj = {}

//         strs[i].split("").forEach((char) => {
//             obj[char] = (obj[char] || 0) + 1
//         })

//         Object.keys(obj).sort().forEach((char) => {
//             sortedObj[char] = obj[char]
//         })

//         strsAlpha.push(sortedObj)
//     }

//     let flag = 1

//     for(let i = 0; i < strsAlpha.length; i++) {
//         if (flagArr[i] === 0) {
//             flagArr[i] = flag
//             for(let j = i + 1; j < strsAlpha.length; j++) {
//                 if (JSON.stringify(strsAlpha[i]) === JSON.stringify(strsAlpha[j])) {
//                     flagArr[j] = flag
//                 }
//             }
//             flag++
//         }
//     }

//     let result = {}
//     for(let i = 0; i < flagArr.length; i++) {
//         if (!result[flagArr[i]]) {
//             result[flagArr[i]] = []
//         }
//         result[flagArr[i]].push(strs[i])
//     }

//     return Object.values(result)
// };
