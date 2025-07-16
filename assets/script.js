// Menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Rotating nicknames for the info page
if (document.getElementById('nickname-cycle')) {
    const nicknames = ["Assa", "Аска", "аса", "кот за столом", "codermasochist", "dolbaeb"];
    let currentIndex = 0;
    const nicknameElement = document.getElementById('nickname-cycle');
    
    function updateNickname() {
        nicknameElement.textContent = nicknames[currentIndex];
        currentIndex = (currentIndex + 1) % nicknames.length;
    }
    
    // Initial update
    updateNickname();
    // Change every 3 seconds
    setInterval(updateNickname, 3000);
}

// Age calculation for the info page
if (document.getElementById('age')) {
    const birthDate = new Date(2008, 5, 30); // Note: months are 0-indexed (5 = June)
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    let diff = currentDate - birthDate;
    
    // Convert to years (with decimals)
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    
    // Format to 6 decimal places
    document.getElementById('age').textContent = years.toFixed(6);
}

// Copy to clipboard function for the donate page
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
