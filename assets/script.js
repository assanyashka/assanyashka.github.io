// Common for all pages: Sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar && sidebar.classList.contains('open') && 
            !sidebar.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Info page specific: Rotating aliases
    const aliases = [
        "Assa", "Аска", "аса", "кот за столом", "codermasochist", "dolbaeb"
    ];
    const aliasesContainer = document.getElementById('rotating-aliases');
    
    if (aliasesContainer) {
        let index = 0;
        
        function rotateAlias() {
            aliasesContainer.style.opacity = 0;
            setTimeout(() => {
                aliasesContainer.textContent = aliases[index];
                aliasesContainer.style.opacity = 1;
                index = (index + 1) % aliases.length;
            }, 500);
        }
        
        // Initial display
        aliasesContainer.textContent = aliases[0];
        aliasesContainer.style.opacity = 1;
        setInterval(rotateAlias, 3000);
    }

    // Info page: Calculate age
    const ageSpan = document.getElementById('age');
    if (ageSpan) {
        const birthDate = new Date(2008, 5, 30); // June 30, 2008 (month is 0-indexed)
        const now = new Date();
        const diff = now - birthDate;
        const age = diff / (1000 * 60 * 60 * 24 * 365.25); // in years
        ageSpan.textContent = age.toFixed(6); // e.g., 17.041320
    }

    // Donate page: Copy to clipboard
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Change button text to indicate copied
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});
