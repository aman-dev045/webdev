function obj1() {
    let r1 = Math.random();
    
    let o = {
        name1: "aman", name2: "nakul", name3: "tiru"
    }
    if (r1 <= 0.3) {
        return o.name1 + o1(b)
    }
    else if (r1 > 0.3 && r1 <= 0.6) {
        return o.name2 + o1();
    }
    else {
        return o.name3 + o1();
    }
}
function o1(b) {
    let r2 = Math.random();
    let o1 = {
        shop1: "foods", shop2: "haircut", shop3: "jwellery"
    }
    if (b <= 0.3) {
        return o1.shop1 + obj2()
    }
    else if (r2 > 0.3 && r2 <= 0.6) {
        return o1.shop2 + obj2();
    }
    else {
        return o1.shop3 + obj2();
    }
}
function obj2(c) {
    let r3 = Math.random();
    let o2 = {
        tag1: "bros", tag2: "vala", tag3: "boys"
    } 
    if (r3 <= 0.3) {
        return o2.tag1 
    }
    else if (r3> 0.3 && r3 <= 0.6) {
        return o2.tag2;
    }
    else {
        return o2.tag3 ;
    }
}
let a=obj1();
console.log(a)
alert(`this name you can take for your bussiness model: ${a}`)