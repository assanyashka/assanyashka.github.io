document.addEventListener('DOMContentLoaded', function() {
    const birthDate = new Date(2008, 5, 30);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    document.getElementById('age').textContent = ageInYears.toFixed(8);
    
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        sideMenu.style.right = sideMenu.style.right === '0px' ? '-300px' : '0px';
    });
    
    if (document.querySelector('.copy-btn')) {
        document.querySelector('.copy-btn').addEventListener('click', function() {
            navigator.clipboard.writeText('error.ton');
            this.textContent = 'Copied!';
            setTimeout(() => this.textContent = 'Copy', 2000);
        });
    }
});
