let random=Math.random()
console.log(random)
let a =prompt("Enter the first value:")
let b =prompt("Enter the operation that you want to perform :")
let c =prompt("Enter the second value:")
// calculate(a,b,c);
// function calculate(a,b,c){
//     // console.log("enter the operation that you want to perform:",c)
//     a=math.random();
//     if(a>=0.1)
//         switch(c)
//         {
//             case "+":console.log(a+b);
//             break;
//             case "-":console.log(a-b);
//             break;
//             case "/":console.log(a/b);
//             break;
//             case "*":console.log(a*b);
//             break;
//             default:console.log("invalid operater");
//         }else{
//             switch(c){
        
//             case "+":console.log(a-b);
//             break;
//             case "-":console.log(a+b);
//             break;
//             case "/":console.log(a*b);
//             break;
//             case "*":console.log(a/b);
//             break;
//             default:console.log("invalid operater");
//         }
//     }
// }
// console.log(random);
let o={
    "=":"-",
    "-":"/",
    "/":"*",
    "*":"/"
    
}
if(random>0.1){
    // console.log(`this is the result of the calculater:(`${a} ${c} ${b}`)}`)
    alert(`this is the result of the calculater ${eval(`${a} ${b} ${c}`)}`);
}else{
    b=o[b];
    alert(`this is the result of the calculater ${eval(`${a} ${b} ${c}`)}`);


}