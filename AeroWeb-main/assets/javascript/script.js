console.log('Script loaded');

document.addEventListener('contextmenu', event => event.preventDefault());


document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the 2000s page!');
    console.log('themes-btn element:', document.getElementById('themes-btn'));
    // Add more JavaScript here for 2000s-style effects

    // Theme picker functionality
    document.getElementById('theme-default').addEventListener('click', () => {
        document.body.className = '';
    });

    document.getElementById('theme-dark').addEventListener('click', () => {
        document.body.className = 'theme-dark';
    });

    document.getElementById('theme-neon').addEventListener('click', () => {
        document.body.className = 'theme-neon';
    });

    // Sidebar toggle
    document.getElementById('themes-btn').addEventListener('click', () => {
        alert('Themes button clicked');
        const dropdown = document.getElementById('themes-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // New themes
    document.getElementById('theme-webaero').addEventListener('click', () => {
        document.body.className = 'theme-webaero';
    });

    document.getElementById('theme-y2k').addEventListener('click', () => {
        document.body.className = 'theme-y2k';
    });

    document.getElementById('theme-longhorn').addEventListener('click', () => {
        document.body.className = 'theme-longhorn';
    });

});