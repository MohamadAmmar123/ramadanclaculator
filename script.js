function calculatePrice() {
    const dewasa = Number(document.getElementById("dewasa").value);
    const kanak = Number(document.getElementById("kanak").value);
    const warga = Number(document.getElementById("warga").value);
    const isUUM = document.getElementById("uum").value;
    const isEarly = document.getElementById("early").value;

    const PRICE_DEWASA = 55;
    const PRICE_KANAK = 25;
    const PRICE_WARGA = 35;

    let dewasaTotal = dewasa * PRICE_DEWASA;
    let kanakTotal = kanak * PRICE_KANAK;
    let wargaTotal = warga * PRICE_WARGA;

    let discountText = "";

    // UUM discount (Adult only)
    if (isUUM === "yes") {
        const discount = dewasaTotal * 0.10;
        dewasaTotal -= discount;
        discountText += "✔ 10% UUM discount (Adult only)<br>";
    }

    let total = dewasaTotal + kanakTotal + wargaTotal;

    // Early Bird discount (Total)
    if (isEarly === "yes") {
        const earlyDiscount = total * 0.10;
        total -= earlyDiscount;
        discountText += "✔ 10% Early Bird discount<br>";
    }

    document.getElementById("result").innerHTML = `
        <strong>Price Breakdown</strong><br>
        Dewasa: RM ${dewasaTotal.toFixed(2)}<br>
        Kanak-kanak: RM ${kanakTotal.toFixed(2)}<br>
        Warga Emas: RM ${wargaTotal.toFixed(2)}<br><br>
        ${discountText}
        <strong>Total: RM ${total.toFixed(2)}</strong>
    `;
}
