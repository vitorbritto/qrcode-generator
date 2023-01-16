const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateQrCode();
    }
});

function generateQrCode() {
    if (!input.value) {
        return;
    }

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?color=555&size=250x250&data=${input.value}`;
};
