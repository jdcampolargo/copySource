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
    let text = '';

    if (event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement) {
      const el = event.target;
      text = el.value.substring(el.selectionStart, el.selectionEnd);
    } else {
      text = document.getSelection().toString();
    }

    event.clipboardData.setData('text/plain', text + "\n\nSource: " + window.location.href);
    event.preventDefault();
    // whatever i highlight it's automatically copied
    // to clipboard and i can paste it anywhere
  }
});


