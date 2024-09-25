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


/*document.addEventListener('DOMContentLoaded', function() {
    const themeLink = document.getElementById('theme-style');
    const switchButton = document.getElementById('switch-theme-btn');
    
    // Function to switch the theme
    function switchTheme() {
        let currentTheme = localStorage.getItem('theme');

        // Cycle through the 3 themes: light, dark, purple
        if (currentTheme === 'purple') {
            themeLink.href = 'styles3.css';   
            localStorage.setItem('theme', 'dark');
        } else if (currentTheme === 'dark') {
            themeLink.href = 'styles.css';   
            localStorage.setItem('theme', 'light');
        } else {
            themeLink.href = 'styles2.css';   
            localStorage.setItem('theme', 'purple');
        }
    }
    
    // Check localStorage for theme on page load and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'purple') {
        themeLink.href = 'styles2.css'; 
    } else if (savedTheme === 'dark') {
        themeLink.href = 'styles3.css';  
    } else {
        themeLink.href = 'styles.css';  // Default to light theme
    }
    
    // Add event listener to the button for switching theme
    switchButton.addEventListener('click', switchTheme);
}); */