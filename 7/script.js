const textInput = document.getElementById('text-input');

textInput.addEventListener('input', function () {
    this.style.transform = 'scale(1.05)';
});

textInput.addEventListener('blur', function () {
    this.style.transform = 'scale(1)';
});
