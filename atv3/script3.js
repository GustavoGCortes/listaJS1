let real = (prompt("Diga um valor em reais"))

let dolar = real/5.48
let euro = real/6.10
dolar = dolar.toFixed(2)
euro = euro.toFixed(2)

alert("Esse valor em dolares é: " + dolar + "\n Esse valor em euros é:" + euro)