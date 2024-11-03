const navbar = document.getElementById('navbar');
// Initialement invisible
navbar.style.backgroundColor = 'rgba(31, 41, 55, 0)'; // Couleur initiale pour bg-gray-800 avec opacité 0

window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;

  // Lorsque l'utilisateur commence à défiler, applique une couleur gris foncé transparent
  if (scrollPos > 0) {
    navbar.style.backgroundColor = 'rgba(31, 41, 55, 0.8)'; // gris-800 avec opacité 0.8
  } else {
    navbar.style.backgroundColor = 'rgba(31, 41, 55, 0)'; // Invisible quand l'utilisateur est en haut
  }
});
