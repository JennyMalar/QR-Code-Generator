function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrCodeContainer = document.getElementById("qrcode");

    qrCodeContainer.innerHTML = ""; // Clear the previous QR code
    if (text.trim() !== "") {
        new QRCode(qrCodeContainer, {
            text: text,
            width: 150,
            height: 150
        });
    }
}