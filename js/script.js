function createPetals() {
    const container = document.getElementById('petals');
    const petalCount = 30;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.width = Math.random() * 15 + 8 + 'px';
        petal.style.height = petal.style.width;
        petal.style.animationDuration = Math.random() * 8 + 6 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 150);
        }
    });
}

function handleRSVP(e) {
    e.preventDefault();
    const button = e.target.querySelector('button');
    button.textContent = 'Thank You!';
    button.style.background = '#d4a88f';
    button.style.color = '#1a1a1a';
    setTimeout(() => {
        button.textContent = 'Response Sent';
    }, 2000);
    setTimeout(() => {
        e.target.reset();
        button.textContent = 'Send Response';
        button.style.background = 'transparent';
        button.style.color = '#d4a88f';
    }, 4000);
}

createPetals();

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', () => {
    setTimeout(handleScrollAnimations, 100);
});