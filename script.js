let Name = prompt("Adınızı Giriniz");
let myName=document.querySelector("#st");
myName.innerHTML = `${Name.toUpperCase()}!`


function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector(".clock").innerHTML = date;
}


const d = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector(".day").innerHTML = days[d.getDay()];


setInterval(tarihSaat, 1000); 


