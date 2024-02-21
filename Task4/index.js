var a=()=>console.log("HELLOWORLD")
a()


var multi=(a,b)=>console.log(a*b)
multi(5,2)

var power = (base, exponent) =>console.log(base ** exponent)
power(5,2)

var largestNumber = (a,b) => {
    if(a>b){console.log("a is largest")}
    else {console.log("b is largest")}
}

largestNumber(5,2)

var check=(n)=>{
    if(n % 2 == 0){console.log("even")}
    else {console.log("odd")}
}
check(2)