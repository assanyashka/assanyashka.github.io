document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const playBtn = document.getElementById('playBtn');
    const bgMusic = document.getElementById('bgMusic');
    const ageDisplay = document.getElementById('ageDisplay');
    
    function toggleMenu() {
        document.body.classList.toggle('menu-open');
    }
    
    function closeMenu() {
        document.body.classList.remove('menu-open');
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    document.addEventListener('click', function(e) {
        if (document.body.classList.contains('menu-open') && 
            !sideMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    if (playBtn && bgMusic) {
        playBtn.addEventListener('click', function() {
            if (bgMusic.paused) {
                bgMusic.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                bgMusic.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }
    
    if (ageDisplay) {
        const birthDate = new Date(2008, 5, 30);
        const updateAge = () => {
            const now = new Date();
            const diff = now - birthDate;
            const years = diff / (1000 * 60 * 60 * 24 * 365.25);
            ageDisplay.textContent = `Age: ${years.toFixed(6)} y. o.`;
        };
        updateAge();
        setInterval(updateAge, 100);
    }
    
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const wallet = this.parentElement.querySelector('p').textContent;
            navigator.clipboard.writeText(wallet).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
    
    const linkButtons = document.querySelectorAll('.link-card button');
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});
