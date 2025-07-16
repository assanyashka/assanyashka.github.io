const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

if (document.getElementById('nickname-cycle')) {
    const nicknames = ["Assa", "Аска", "аса", "кот за столом", "codermasochist", "dolbaeb"];
    let currentIndex = 0;
    const nicknameElement = document.getElementById('nickname-cycle');
    
    function updateNickname() {
        nicknameElement.textContent = nicknames[currentIndex];
        currentIndex = (currentIndex + 1) % nicknames.length;
    }
    
    updateNickname();
    setInterval(updateNickname, 3000);
}

if (document.getElementById('age')) {
    const birthDate = new Date(2008, 5, 30);
    const currentDate = new Date();
    let diff = currentDate - birthDate;
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById('age').textContent = years.toFixed(6);
}

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const address = this.closest('.address-box').querySelector('span').textContent;
        navigator.clipboard.writeText(address).then(() => {
            const notification = this.nextElementSibling;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
