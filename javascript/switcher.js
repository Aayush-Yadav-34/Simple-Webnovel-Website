// JavaScript to handle theme switching and save it in localStorage
document.addEventListener('DOMContentLoaded', function() {
    const themeLink = document.getElementById('theme-style');
    const switchButton = document.getElementById('switch-theme-btn');
    
    // Function to switch the theme
    function switchTheme() {
        let currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'dark') {
            themeLink.href = 'css/styles.css';
            localStorage.setItem('theme', 'light');
        } else {
            themeLink.href = 'css/styles2.css';
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Check localStorage for theme on page load and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeLink.href = 'css/styles2.css';
    } else {
        themeLink.href = 'css/styles.css';
    }
    
    // Add event listener to the button for switching theme
    switchButton.addEventListener('click', switchTheme);
});
