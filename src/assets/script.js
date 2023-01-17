const input = document.querySelector('input');
const qrcode = document.querySelector('#qrcode');

const getPermissions = () => {
    navigator
        .permissions
        .query({ name: 'write-on-clipboard' })
        .then(result => {
            if (result.state =='granted' || result.state =='prompt') {
                console.log('Write access granted!');
            }
        });
    
    navigator
        .permissions
        .query({ name: 'read-text-on-clipboard' })
        .then(result => {
            if (result.state =='granted' || result.state =='prompt') {
                console.log('Read access granted!');
            }
        });
}

const identifyPressOnEnter = (event) => {
    if (event.key === 'Enter') {
        generateQrCode();
    }
}

document.addEventListener('DOMContentLoaded', getPermissions);

document.addEventListener('keypress', identifyPressOnEnter);

function generateQrCode() {
    if (!input.value) {
        return;
    }

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?color=555&size=250x250&data=${input.value}`;
};

async function copyPicture() {
    console.log(qrcode.src);
    try {
      const response = await fetch('./logo.png');
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
    } catch (err) {
      console.error(err.name, err.message);
    }
  };