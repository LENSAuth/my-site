const url = 'https://lens.admin-host.com'; // LENS server URL
const host = 'my-app'; // Registered app slug
const width = 600; // Popup window width
const height = 850; // Popup window height
document.querySelector('#domain').innerHTML += document.domain; // Display current domain on screen. This domain must be registered with LENS. Register 'localhost' for testing
function receiveMessage(event) {
    if (event.origin === url) {
        console.log(event.data); // Log response in console
        document.querySelector('#response').innerHTML += JSON.stringify(event.data); // Display response on screen
    };
};
window.addEventListener('message', receiveMessage, false);
const popupWindow = window.open(`${url}?host=${host}&return=${document.domain}`, 'popup', `width=${width},height=${height},left=${(screen.width / 2) - (width / 2)},top=${(screen.height / 2) - (height / 2)}`);