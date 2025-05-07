// Font size settings functionality
document.addEventListener('DOMContentLoaded', function() {
    const decreaseFontBtn = document.getElementById('decreaseFontBtn');
    const increaseFontBtn = document.getElementById('increaseFontBtn');
    const fontSizeDisplay = document.getElementById('fontSizeDisplay');
    
    // Font size presets
    const fontSizes = {
        'small': '0.875rem',
        'medium': '1rem',
        'large': '1.125rem',
        'xlarge': '1.25rem'
    };
    
    // Get saved font size or default to medium
    let currentSize = localStorage.getItem('fontSize') || 'medium';
    updateFontSize(currentSize);
    
    // Decrease font size
    decreaseFontBtn.addEventListener('click', function() {
        const sizes = Object.keys(fontSizes);
        const currentIndex = sizes.indexOf(currentSize);
        if (currentIndex > 0) {
            currentSize = sizes[currentIndex - 1];
            updateFontSize(currentSize);
        }
    });
    
    // Increase font size
    increaseFontBtn.addEventListener('click', function() {
        const sizes = Object.keys(fontSizes);
        const currentIndex = sizes.indexOf(currentSize);
        if (currentIndex < sizes.length - 1) {
            currentSize = sizes[currentIndex + 1];
            updateFontSize(currentSize);
        }
    });
    
    // Update font size and save preference
    function updateFontSize(size) {
        document.documentElement.style.fontSize = fontSizes[size];
        fontSizeDisplay.textContent = size.charAt(0).toUpperCase() + size.slice(1);
        localStorage.setItem('fontSize', size);
    }
}); 