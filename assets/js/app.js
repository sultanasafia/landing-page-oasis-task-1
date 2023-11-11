function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// You can add more cards by extending this array
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3')
  ];
  
  // Change the animation properties here
  const animationProperties = {
    duration: 1000, // in milliseconds
    direction: 'alternate',
    iterations: Infinity
  };
  
  // Apply animation to each card
  cards.forEach((card, index) => {
    card.style.animation = `bounce${index + 1} ${animationProperties.duration}ms ${animationProperties.direction} ${animationProperties.iterations}`;
  });
// ========================contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Basic form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Simulate form submission (you would handle this differently in a real scenario)
    alert('Form submitted!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  console.log(name, email , message);
    // Reset the form
    document.getElementById('contactForm').reset();
  });
// =====================================
document.addEventListener('DOMContentLoaded', function() {
    // Fade in animation on page load
    document.getElementById('servicesHeading').style.animationPlayState = 'running';
    document.getElementById('servicesText').style.animationPlayState = 'running';
    document.getElementById('additionalText').style.animationPlayState = 'running';
  
    // Toggle text visibility on button click
    document.getElementById('toggleButton').addEventListener('click', function() {
      var additionalText = document.getElementById('additionalText');
      additionalText.style.display = additionalText.style.display === 'none' ? 'block' : 'none';
    });
  });
  