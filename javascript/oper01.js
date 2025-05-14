//oper01.js

//operator

console.log(2 ** 4); //2*2*2*2 제곱 연산식


let x = 10;
let y = 10;
let z = '10';

console.log(x > 5);

// ==값이 같다    === 값과 타입이 같다

console.log(x == y); //true
console.log(x == z); //true

console.log(x === y); //true
console.log(x === z); //false === 값과 자료형 두가지가 함께 일치하는가?

console.log(x > 5 && y >0);
console.log(x == 1 || y >= 50);

//숫자 -> 문자
//문자 -> 숫자

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w);

//String()
//Number()

console.log(q+ String(e));
console.log(q+ Number(w));

if(q ==10){
    console.log("출력");
}

q == 10 && console.log("출력&&"); //앞이 true면 뒤를 실행한다.

//함수 = 메소드