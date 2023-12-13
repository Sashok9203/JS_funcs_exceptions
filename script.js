// Task 1

console.info("------------ Task 1 ------------");
function getBracket(count)
{
    let startBr = "(";
    let endBr = ")";
    console.info(startBr.repeat(count) + endBr.repeat(count));
}

getBracket(4);

//Task 2
console.info("------------ Task 2 ------------");
function getRectangleArea(width, height)
{
    if(typeof(width)!=='number' || Number.isNaN(width) )
        throw new TypeError("Invalid width value ! ! !");
    else if(typeof(height)!=='number'  || Number.isNaN(height))
        throw new TypeError("Invalid height value ! ! !");
    return width * height;
}

let width = "123";
let height = 12;

try{getRectangleArea(width, height);}
catch(ex){console.error(ex.message);}
width = 23;
height = true;
try{getRectangleArea(width, height);}
catch(ex){console.error(ex.message);}

//Task 3
console.info("------------ Task 3 ------------");

class WeekdayError extends Error{
    constructor(message){
        super(message || "Incorrect weekday number");
        this.name = "WeekdayError";
    }
}

function showWeekdayName(day)
{
    const days = ["Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday","Sunday"];
    if(typeof(day)!=='number' || Number.isNaN(day) || day < 1 || day > 7) 
        throw new WeekdayError();
    console.info(days[day-1]);
}

let day = 5; 
showWeekdayName(day);
day = 15;
try{showWeekdayName(day)}
catch(ex){console.error(`${ex.name}: ${ex.message}`)}
day = "qwe";
try{showWeekdayName(day)}
catch(ex){console.error(`${ex.name}: ${ex.message}`)}

//Task 4
console.info("------------ Task 4 ------------");

// function fibonacсi()
// {
//     let first = -1;
//     let second = 1;
//     return ()=>{
//      let  res = first + second;
//        first = second;
//        second = res;
//        if(first == 0) return 1;
//        return res;
//     }
// }

function fibonacci()
{
    let first = 0;
    let second = 0;
    return ()=>{
       let res = first + second;
       first = second;
       second = res;
       if(res == 0) first++;
       return res;
    }
}

let fib = fibonacci();
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());
console.info(fib());


