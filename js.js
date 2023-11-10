                // JS Problem Solving

// Problem 1

var  a = 5;
var b = 6;

console.log("Before swap : a = ", a , "b = ", b);

var temp = a;
a = b;
b = temp;

console.log("After swap: a = ", a , " b = ", b);

[a , b] = [ b , a]
console.log("after swap : a = ", a, "b = " , b);

// Problem 2

var num = 2.92;

console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(Math.random() * 6));

// Problem 3

var a = 100;
var b = 20;
var c = 30;

if(a > b & a > c){
    console.log("a is largest");
}
else if(b > a & b > c){
    console.log("b is largest");
}

else{
    console.log("c is largest");
}

// Problem 4

var marks = [45,80,99,35,48,15,93,55];
var max = marks[0]

for(var i = 0; i < marks.length ; i ++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("Highest mark is : " + max);

// Problem 5

var marks = [45,80,99,35,48,15,93,55];

var sum = 0;

for(i = 0; i < marks.length; i ++){
    element = marks[i]
    sum = sum + element;
}

console.log('Total marks : ', sum);

function myfanc(){
    var sum = 0;

    for(i = 0; i < marks.length; i ++){
    element = marks[i]
    sum = sum + element;
}
}
return sum;

console.log('Total marks : ', sum);

// Problem 6

var anotherArry = [2,0,2,3,258,99,58,47,24,62]

var max = myArry[0];
for(var i = 0;i < myArry.length;i ++){
    var element = myArry[i];
    if(element > max){
        max = element;
        
    }
}
console.log(max);

// Problem 7

var numbers = [20,30,40,80,65,75,95]

var sum = 0;

for( i = 0; i < numbers.length; i ++){

    var element = numbers[i];
    sum = sum + element;
}
console.log("Total number : ", sum);

function fa(numbers){
    var sum = 0;

    for( i = 0; i<numbers.length; i ++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [20,30,40,80,65,75,95]
var result = fa(numbers);

console.log("Total number : ", result);

// Problem 8

var names = [3,6,9,8,7,3,12,3,8,4,12,5,5]

var uniqueName = [];

for( i = 0; i < names.length; i ++){
    var element = names[i];
    var index = uniqueName.indexOf(element);

    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);

function fra(numbers){

    var uniqueName = [];

    for( i = 0; i < names.length; i ++){
        var element = names[i];
        var index = uniqueName.indexOf(element);

        if(index == -1){
            uniqueName.push(element);
        }
    }
    return uniqueName;
}

var numbers = [3,6,9,8,7,3,12,3,8,4,12,5,5,21,52,84,2,42,4,84,21,21];
var result = fra(numbers);
console.log(result);

// Problem 9

var inch = 156;
result = inch / 12;
console.log(result);

function feet(inch){
    calculation = inch / 12;
    return calculation;
}

var calculation = feet(144);
calculation = feet(24);
console.log(calculation);

// Problem 10

const lepYear = 2032;
if (lepYear % 4 == 0){
    console.log("Yeah it is leap Year");
}
else{
    console.log('It is not LeapYear');
}

function myYear(year){
    if (year % 4 == 0){
        console.log("Yeah it is leap Year");
        
    }
    else{
        console.log('It is not LeapYear');
    }
}

myYear(2020);
myYear(2027);
myYear(2032);
myYear(2044);
myYear(2064);
myYear(2098);

// Problem 11

let factorial = 1;
for (var i = 1; i <=10; i ++){
    factorial = factorial * i;
    console.log(i , factorial)
}
var factorial = 1;

for(var i = 1; i <= 10; i ++){
    factorial = factorial * i;
    console.log(i, factorial);
}

function factorial(func){
    var factorial = 1;
     for(var i = 1; i <= func; i ++){
        factorial = factorial * i ;
        console.log(i, factorial);
    }
}
factorial(10);

function fac(func){

    var factorial = 1;
    for(var i = 1;i<func,i++;){
        factorial = factorial * i;
        console.log(i,factorial);
    }
    return factorial;
}
var myFunc = fac(10);
console.log(myFunc);

var i = 1;
factorial = 1;
while(i <= 10){
    factorial = factorial * i;
    console.log(i,factorial);
    i++;
}

function fac(ff){

    var i = 1;
    factorial = 1;
    while(i < ff){
        factorial = factorial * i;
        i++;
        console.log(i,factorial);
    }
}

fac(5);

function fac(p){
    var i = 1;
    var factorial = 1;
    while(i<=p){
        factorial = factorial * i;
        i = i + 1;
        console.log(factorial);
    }
    return factorial;
}

// Problem 12

function fa(n){
    if(n==0){
        return 1;
    }
    else{
        return n * fa(n-1);
    }
}

var re = fa(6);
console.log(re);

// Problem 13

var fibo = [0,1];

for(var i = 2; i <  10; i ++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i]);
}
console.log(fibo);

function myArry(arry){
    var fibo = [1,2];
    for( var i = 2; i < arry ; i ++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        // console.log(fibo[i]);
    }
    return fibo;
}

var tha = myArry(10)
console.log(tha);

// Problem 14


function fibonacci(n){
    var fibo =[0,1];
    for(var i = 2 ;i <= n ;i ++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

var myuFibonacci = fibonacci(10)

console.log(myuFibonacci);

console.log('--------------');

function fibonacci(n){
    var fibo =[0,1];
    for(var i = 2;i <= 10;i ++){
        fibo[i] = fibo[i-1] + fibo[i-2]
        console.log(fibo);
    }
}

fibonacci(10);

function fibonacci(n){
    if (n==0){
        return 0;
    }
    else if (n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

var result = fibonacci(10)
console.log(result);

// Problem 15

var myMarks = [1,2,3,4,5,6,7,8,9,10];

var hightestMarks = myMarks[0];

for(i = 0; i <= 10; i ++){
    if(myMarks[i] > hightestMarks){

        hightestMarks = myMarks[i];
    }
}

console.log(hightestMarks);

function largestMarks(marks){

    var maxMark = marks[0];
    for(var i = 0; i <= marks.length; i ++){
        if(marks[i] > maxMark){
            maxMark = marks[i];
        }
    }
    return maxMark;
}

var marks = [12,20,30,40,50,60,700,98]

var result = largestMarks(marks)

console.log("Second Max Mark is : ",result);

// Finish