

let display = document.querySelector(".display-number");
let clear = true;
function handle(arr,elem){
    arr.push(elem);
    if (clear) {
        display.textContent = "";
        clear = false;
    }
    display.textContent += (" "+elem);
}

let work = [];
let zero = document.querySelector(".zero");
zero.addEventListener("click",()=>handle(work,0));

let one = document.querySelector(".one");
one.addEventListener("click",()=>handle(work,1));

let two = document.querySelector(".two");
two.addEventListener("click",()=>handle(work,2));

let three = document.querySelector(".three");
three.addEventListener("click",()=>handle(work,3));

let four = document.querySelector(".four");
four.addEventListener("click",()=>handle(work,4));

let five = document.querySelector(".five");
five.addEventListener("click",()=>handle(work,5));

let six = document.querySelector(".six");
six.addEventListener("click",()=>handle(work,6));

let seven = document.querySelector(".seven");
seven.addEventListener("click",()=>handle(work,7));

let eight = document.querySelector(".eight");
eight.addEventListener("click",()=>handle(work,8));

let nine = document.querySelector(".nine");
nine.addEventListener("click",()=>handle(work,9));

let ops = [];

let add = document.querySelector(".add");
add.addEventListener("click",()=>handle(ops,'+'));

let sub = document.querySelector(".sub");
sub.addEventListener("click",()=>handle(ops,'-'));

let mul = document.querySelector(".mul");
mul.addEventListener("click",()=>handle(ops,'*'));

let div = document.querySelector(".div");
div.addEventListener("click",()=>handle(ops,'/'));

let equal = document.querySelector(".equal");
equal.addEventListener("click",calculate);

let clr = document.querySelector(".clr"); 
clr.addEventListener("click",()=>{
    display.textContent = "0";
    clear = true;
})

function calculate(){
    let ans = 0;
    let b = work.pop();
    let a = work.pop();
    if (ops[0]=='+') {
        ans = a+b;
    } else if (ops[0]=='-') {
        ans = a-b;
    } else if (ops[0]=='*') {
        ans = a*b;
    } else {
        ans = a/b;
    }
    ops.pop();
    display.textContent = ans;
    //clear = true;
    work.push(ans);
}


