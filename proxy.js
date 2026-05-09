function browseSite() {
    const url = document.getElementById('url').value;
    const frame = document.getElementById('browse-frame');
    
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    // Add protocol if missing
    let fullUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        fullUrl = 'https://' + url;
    }
    
    // Use a different CORS proxy service
    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(fullUrl);
    
    frame.style.display = 'block';
    frame.src = proxyUrl;
}

// Handle form submission
document.getElementById('url').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        browseSite();
    }
});
