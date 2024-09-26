let rs

let op = parseFloat(prompt("Digite qual operação quer realizar: 1-adição 2-subtração 3-multipicação 4-divisão"))

if(op>0 & op<5){
let n1 = parseFloat(prompt("Diga um valor"))
let n2 = parseFloat(prompt("Diga outro valor"))

if(op==1){
    rs=n1+n2
    alert("O resultado é: " + rs)
}
if(op==2){
    rs=n1-n2
    alert("O resultado é: " + rs)
}
if(op==3){
    rs=n1*n2
    alert("O resultado é: " + rs)
}
if(op==4){
    rs=n1/n2
    alert("O resultado é: " + rs)
}
}
else{
    alert("operação invalida")
}