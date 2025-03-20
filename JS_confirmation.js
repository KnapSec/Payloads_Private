document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed!');
    alert(location.href);
    // Example visual confirmation
    const message = document.createElement('div');
    message.textContent = "✅ JavaScript Executed Successfully!";
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.left = '10px';
    message.style.backgroundColor = '#4CAF50';
    message.style.color = '#fff';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '5px';
    message.style.zIndex = '9999';
    document.body.appendChild(message);

    setTimeout(() => message.remove(), 8000);
});
