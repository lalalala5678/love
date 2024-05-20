document.querySelector('.heart').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const currentColor = this.style.backgroundColor;
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    this.style.backgroundColor = newColor;
    this.style.setProperty('--heart-color', newColor);
    this.style.setProperty('--before-color', newColor);
    this.style.setProperty('--after-color', newColor);
});
