let tps, tn, tt 

let n1 = parseFloat(prompt("Diga um valor"))
let p1 = parseFloat(prompt("Diga o peso"))
let n2 = parseFloat(prompt("Diga outro valor"))
let p2 = parseFloat(prompt("Diga o peso"))
let n3 = parseFloat(prompt("Diga outro valor"))
let p3 = parseFloat(prompt("Diga o peso"))

tn= (n1*p1)+(n2*p2)+(n3*p3)
tps= p1+p2+p3
tt= tn/tps

alert(tt)


