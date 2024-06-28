// You can add JavaScript here if you need interactivity or animations
// For example, a simple animation on profile picture hover:
const profilePicture = document.querySelector('.profile-header img');

profilePicture.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1)';
});

profilePicture.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
});
