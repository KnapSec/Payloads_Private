window.onload = function() {
    const firstButton = document.querySelector('button');
    if (firstButton) {
        const computedStyle = window.getComputedStyle(firstButton);
        const originalWidth = parseFloat(computedStyle.width);
        const originalHeight = parseFloat(computedStyle.height);

        firstButton.style.width = (originalWidth * 10) + 'px';
        firstButton.style.height = (originalHeight * 10) + 'px';
        firstButton.style.fontSize = '3em';  // Increase text size for better readability
    } else {
        console.warn('No button found on the page.');
    }
};