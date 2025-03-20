window.onload = function() {
    // Create a confirmation message
    const message = document.createElement('div');
    message.textContent = "✅ JavaScript Executed Successfully!";
    
    // Style the message
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.left = '10px';
    message.style.backgroundColor = '#4CAF50';
    message.style.color = '#fff';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '5px';
    message.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    message.style.zIndex = '9999';
    
    // Display the message
    document.body.appendChild(message);

    // Optional: Auto-hide the message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 8000);
};
