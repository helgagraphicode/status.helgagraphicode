// Animasi unik saat website dibuka
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    title.style.opacity = 0;
    
    let opacity = 0;
    const fadeIn = setInterval(function() {
        opacity += 0.05;
        title.style.opacity = opacity;
        
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
});
