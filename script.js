let inputBRL = document.getElementById("BRLvalue");

let conversions = document.getElementById("conversions");

function converter() {
    let brl = inputBRL.value;

    let brlDollar = brl / 5;

    conversions.innerHTML = `<p>US$${brlDollar}</p>`
}