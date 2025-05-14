

let scores = [10, 30, 50, 70];

for(let i = 0; i< scores.length; i++){
    console.log(scores[i]);
}

//for ... in
for(let i in scores){ // i = index
    console.log(i + ' ' + scores[i]);
}

//for ... of
for(let score of scores){
    console.log(score);
}

//0   1   2   3
//10  30  50  70
scores.forEach((item,index) =>{ //각각 반복시키는 역할
    console.log(item + ' ' + index)
}   );