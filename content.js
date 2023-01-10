const activationKey = "x";
let activationKeyDown = false;
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === activationKey) {
    activationKeyDown = true;
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key.toLowerCase() === activationKey) {
    activationKeyDown = false;
  }
});

document.addEventListener('copy', (event) => {
  if (activationKeyDown) {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString() + "\n\nSource: " + window.location.href);
    event.preventDefault();
    // whatever i highlight it's automatically copied
    // to clipboard and i can paste it anywhere
  }
});


