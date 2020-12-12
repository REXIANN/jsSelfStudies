// 01. 변수와 식별자

// 01-1. 변수
// var : ES5까지의 변수. 수업에서는 더이상 사용하지 않을 것.
// let : 기존의 var를 승계한 변수
// const : 변하지 않는 상수값

// let: 값을 재할당 할 수 있는 변수를 선언한느 키워드
// 변수는 한번만 선언할 수 있으며 여러번 할당할 수 있다.
let x = 1
let x = 3 // SyntaxError: Identifier 'x' has already been declared
x = 3 
// 블록 유효 범위(block scope)
if (x === 1) {
  let x = 2 
  console.log(x) // 이거는 2
}

console.log(x) // 이거는 1

// const(상수): 값이 변하지 않는 상수를 선언하는 키워드
// const는 let과 동일한 블록 스코프를 가진다.
const myFav // Uncought SyntaxError -> 상수는 선언시 반드시 초기값을 지정해주어야 한다.
const myFav = 7

// var: ES6 이전에 변수를 선언하는 키워드
// var 키워드로 선언된 변수는 var 키워드로 재선언 할 수 있다.
// 예기치 않은 문제를 많이 발생시킬 수 있으므로 절대 사용하지 않는다.
var num = 1
var num = 3

// var는 함수 유효범위를 가지고 있다.
var a = 1
let b = 2

if (a === 1) {
  var a = 11
  let b = 22

  console.log(a) // 11 전역변수 a 가 덮어씌워짐
  console.log(b) // 22 
}
console.log(a) // 11
console.log(b) // 2

// 01-2 식별자
// 변수명을 식별자 라고 부르며 특정 규칙을 따른다.
// 반드시 문자, 달러, 밑줄로 시작해야 하고 이후는 숫자도 가능하다.
// 대소문자를 구분하고 클래스명을 제외하고는 대문자로 시작하지 않는 것이 좋다.
// 예약어는 사용할 수 없다 (class, await, super, default, function...)

// 식별자 작성 스타일
// 1. 카멜케이스(camelCase, lower-camel-case) - 객체(Object), 변수, 함수
let dog 
let cats = []
let rDoc = /.*/
function onClick(params) {} // 이벤트 핸들러 - on 으로 시작
let isValid = False

// 2. 파스칼케이스(PascalCase, upper-camel-case) - 클래스, 생성자
// 3. 대문자 스네이크 케이스(SNAKE_CASE) - 상수

/////////////////////////////////////////////////////////////////
// 02. 타입과 연산자
// JS에서 모든 타입은 Primitive(원시값) 또는 Reference타입으로 이루어져 있다.
// 02-1 Number
let a = 13
let b = 3.14
let c = 4.123e8 // 4.123 * 10^8
let d = Infinity // 양의 무한대
let e = -Infinity // 음의 무한대
let f = NaN // Not a Number. 표현할 수 없는 값

// 02-2 String
// 곱셈, 나눗셈, 뺄셈은 불가능, 덧셈만 가능
let sentence = 'hello js'
let sentence2 = 'bye'
let newSentence = sentence + sentence2

// Template Literal
// ES6+ 부터 지원. Backtick(`)을 이용하며, 여러 줄에 걸쳐 문자열을 정의할 수도 있고, JS의 변수를 문자열 안에 바로 사용할 수 있다.
let name = `안녕하
세요`

let age = 1
let greeting = `인녕하세요 저는 ${age}살 입니다.`

// Empty Value
// JS는 값이 존재하지 않음을 표현하는 값으로 undefined와 null이 있다.
// 이것은 설계상의 실수이다. 큰 차이를 두지말고 interchangeable하게 사용할 수 있도록 한다.

// undefined는 값이 없을 경우 JS가 자동으로 할당해주는 값이라고 생각하자.
let myName
console.log(myName) // undefined
typeof undefined // undefined타입

// null은 값이 없음을 개발자가 직접 표현하기 위해서 인위적으로 사용하는 값으로 생각하자.
let myName = null
typeof null // Object타입

// 02-3 연산자
let g = 0

g += 10
g -= 10
g++ // g에 1을 더한다(증감식)
g-- // g에 1을 뺀다.

// 접미사로 사용될 경우 증가하기 전의 값을 반환
let a = 3
b = a++ // a:4, b:3

// 접두사로 사용될 경우 증가한 후의 값을 반환
let a = 3
b = ++a // a:4, b:4

// 비교연산자
// <, >

// 동등 연산자 ( == )
// 메모리의 같은 객체를 가리키거나 같은 값을 같도록 변환할 수 있다면 서로 같다고 판단한다.

// 일치 연산자( === )
// 메모리의 같은 객체를 가리키거나 같은 타입이며, 같은 값인지 비교한다.
//둘의 차이는 엄격한 평가 여부의 차이

10 * null // 0 null이 0으로 형변환되었음
'5' - 1 // 4
'5' + 1 //'51'
'test' * 2 // NaN

// 논리연산자
// 불리언 타입을 연산할 수 있는 연산자
// &&(and), ||(or), !(not)
true && true
false || false
!true

// 삼항연산자
true ? 1 : 2 // 1
false ? 1 : 2 // 2

let myNumber = Math.PI > 4 ? 'Yeeeeh' : 'Noooooo'

// 03 조건 반복문
let name = 'batman'

if (name === 'batman') {
  console.log('환영합니다!')
} else if(name === 'iron man') {
  console.log('환영해요') 
} else {
  console.log('누구세요?')
}

// switch
// 하나의 변수의 값에 따라 분기를 하는 조건문
// break로 case를 종료시키지 않으면 끝까지 가서 무조건 default 가 실행된다.
switch (key) {
  case 'admin' : {
    console.log('반갑습니다 admin')
    break
  }
  case 'test' : {
    console.log('반갑습니다 test')
    break
  }
  case 'user' : {
    console.log('반갑습니다 user')
    break
  }
  default: {
    console.log('default가 출력되었습니다.')
    break
  }
}

// 반복문
// while
// while 키워드 뒤 괄호에 나오는 조건이 true인 동안 반복하는 반복문
let i = 1
while (i < 7) {
  console.log(i)
  i++
}

// for
array = [1, 2, 3, 4, 5]
for (let index = 0; index < array.length; index++) {
  console.log(index) // 0, 1, 2, 3, 4
}

// for of
// 배열에서 요소를 하나씩 순회하며 반복하는 반복문
const NUMBERS = [1, 2, 3, 4, 5]
for (const number of NUMBERS) {
  console.log(number) // 1, 2, 3, 4, 5
}

// for in 
// 객체의 키를 순회하면서 도는 반복문, array를 넣으면 array의 index를 순회함
let fruits = {a: 'apple', b: 'banana'}
for (const key in fruits) {
  if (object.hasOwnProperty(key)) {
    console.log(key) // a, b
    console.log(fruits[key]) // 'apple', 'banana'
  }
}

// array가 들어갔을 때
let fruits = ['apple', 'banana']
for (const key in fruits) {
  if (object.hasOwnProperty(key)) {
    console.log(key) // 0, 1
    console.log(fruits[key]) // 'apple', 'banana'
  }
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}

////////////////////////////////////////////////////
// 04. 함수
// 04-1 선언식
function add(num1, num2) {
  return num1 + num2
}

// 04-2 표현식
// 여기서의 함수는 이름이 없으므로 익명함수라고 한다
const sub = function (num1, num2) {
  return num1 - num2
}
sub(2, 1)

// 기본 인자 함수
const myFunc = function(name='greeting') {
  console.log(`hi ${name}`)
}

// 화살표 함수
// 나중에 이벤트함수에서 사용될때는 동작이 다르다
// 화살표함수는 항상 익명함수이다
// 1.function 생략
// 2. 함수의 매개변수가 단 하나라면 `()`도 생략 가능
// 3. 함수의 body가 표현식 하나라면 `{}`와 return도 생략 가능

let arrow = function (name) {
  return `hello ${name}`
}
// 1
let arrow = (name) => { return `hello ${name}` }
// 2
let arrow = name => { return `hello ${name}` }
// 3
let arrow = name => `hello ${name}`

let arrow2 = function () {
  return 'hello'
}
// 인자가 없는경우 '_` 또는 `()` 사용
let arrow2 = _ => 'hello'

// object를 return 하는 경우 - 1
let returnObject = () => { return { key: value } }
// object를 return 하는 경우 - 2
// return과 {}를 생략한다면 반드시 ()로 감싸줘야 한다.
let returnObject = () => ({ key: value })

// 05. 자료구조
// Array와 Object는 Reference 타입
// 05-1 Array 
let numbers = [1, 2, 3, 4]

numbers[0]
numbers[-1]
numbers.length

// push & pop
// 요소를 배열의 가장 뒤에 추가하거나 제거
numbers.push('a') // [1, 2, 3, 4, 'a']
numbers.pop() // 'a', 가장 마지막 요소 제거

// unshift & shift
// 요소를 배열의 가장 앞에 추가하거나 제거
numbers.unshift('a') // ['a', 1, 2, 3, 4]
numbers.shift() // 'a', 가장 마지막 요소 제거

// includes
// 배열에 특정 요소가 있는지 없는지 검사
numbers.includes(1) // true
numbers.includes(100) // false

// indexOf
// 배열에 특정 요소가 있는지 여부를 확인한 후 
// 가장 첫번째로 찾은 요소의 인덱스 값을 반환
// 요소가 없다면 -1을 반환
let numbers = [1, 2, 3, 4, 'a', 'a']
numbers.indexOf('a') // 4

// join
// 배열의 요소를 함수의 인자를 기준으로 이어서 문자열을 반환
// 함수의 인자가 없다면 ',' 기준으로 이어서 문자열을 반환
// [주의] 원본은 바뀌지 않는다.
numbers.join() // '1,2,3,4,a,a'
numbers.join('') // '1234aa'
numbers.join('-') // '1-2-3-4-a-a'

// 05-2 Object
const me = {
  name: '김준호', 
  'phone number': '010-1234-5678',
  appleProduct: {
    iphone: 'iphone7',
    macbook: '2018pro'
  }
}

me.name // '김준호'
me['name'] // '김준호'
me['phone number'] // '010-1234-5678'
me.appleProduct // {iphone: 'iphone7', macbook: '2018pro'}
me.appleProduct.macbook // '2018pro'

// 05-3 Object to Array
// Object.keys
// Object의 key값을 배열로 반환
let box = {a: 'apple', b: 'banana' }
Object.keys(box) // ['a', 'b']

// Object.values
// Object의 value값을 배열로 반환
Object.values(box) // ['apple', 'banana']

// Object.entries
// Object의 key-value값 배열로 반환
Object.entries(box) // [['a', 'apple'], ['b', 'banana']]

// Object literal (ES6+)
// 객체의 key와 value의 이름이 같다면, 마치 배열을 정의하는 것처럼 한번만 작성 가능
let books = ['Learning Python', 'Learning JS']

let comics = {
  DC: ['WonderWoman', 'Aquaman'],
  Marvel: ['Black Widow', 'Avengers']
}

let bookShop = {
  books, 
  comics
}

console.log(bookShop)
bookShop = {
  books: ['Learning Python', 'Learning JS'],
  comics: {
    DC: ['WonderWoman', 'Aquaman'],
    Marvel: ['Black Widow', 'Avengers']
  }
}
