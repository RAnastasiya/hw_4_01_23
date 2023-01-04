/*
Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат, 
якщо з різними знаками - то поділити і вивести результат,
якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
якщо обидва нулі - то покласти в результат NaN і вивести результат.
*/

const value1 = 4;
const value2 = 0;
let res;

if( value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0 ) {
    res = value1 * value2;
} else {
    res = value1 / value2;
}
if (value1 === 0 && value2 === 0){
    res = NaN;
} 
if (value1 === 0 || value2 === 0){
    res = value1 + value2;
}
console.log(res);

/*
Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
Першим обробляти варіант з lose.
*/

const value = 18;

if (value <= 0 || value % 2 || value % 3 || value % 6) {
    console.log("lose");
} else {
    console.log("win");
}