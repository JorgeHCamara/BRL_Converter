let inputBRL = document.getElementById("BRLvalue");

let conversions = document.getElementById("conversions");

function converter() {
    let brl = inputBRL.value;

    let brlDollar = brl / 5;
    let brlEuro = brl / 6;
    let brlPound = brl / 7;
    let brlCad = brl / 4;

    conversions.innerHTML = `<p>US Dollar: US$${Math.ceil(brlDollar)}</p>`;
    conversions.innerHTML += `<p>Euro: €${Math.ceil(brlEuro)}</p>`;
    conversions.innerHTML += `<p>British Pound: £${Math.ceil(brlPound)}</p>`;
    conversions.innerHTML += `<p>Canadian Dollar: CAD$${Math.ceil(brlCad)}</p>`;
}