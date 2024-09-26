let maior

let n1 = parseFloat(prompt("Diga um valor"))
let n2 = parseFloat(prompt("Diga outro valor"))
let n3 = parseFloat(prompt("Diga outro valor"))

if(n1>=n2 & n1>=n3){
    maior=n1
}
if(n2>=n1 & n1>=n3){
    maior=n2
}
if(n3>=n1 & n1>=n2){
    maior=n3
}
alert("O maior é: " + maior)
