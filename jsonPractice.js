// JSON
// JS Obejct Notation - 객체 표기법
// key-value 형태로 JS Object와 유사한 모습으로 데이터를 표현
// 모양만 비슷할 뿐이고 실제로는 문자열 타입
// Object처럼 사용하기 위해서는 parsing(구문분석) 작업이 필요

// Object -> JSON
let jsonData = JSON.stringify({
  coffee: 'Starbucks',
  icecream: 'Choco'
})

console.log(jsonData)
console.log(typeof jsonData)

let parsedData = JSON.parse(jsonData)

console.log(parsedData)
console.log(typeof parsedData)
