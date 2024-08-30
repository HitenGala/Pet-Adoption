document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector("nav").offsetHeight,
          behavior: "smooth"
        });
      }
    });
  });
});
document.querySelectorAll('.pet-profile button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest in adopting this pet! Please fill out the contact form to proceed.');
        // Redirect to contact form or adoption process page
    });
});
document.getElementById('filter-button').addEventListener('click', () => {
    const breed = document.getElementById('breed').value.toLowerCase();
    const age = document.getElementById('age').value.toLowerCase();
    const size = document.getElementById('size').value.toLowerCase();

    document.querySelectorAll('.pet-profile').forEach(profile => {
        const profileBreed = profile.querySelector('p:nth-child(4)').textContent.toLowerCase();
        const profileAge = profile.querySelector('p:nth-child(2)').textContent.toLowerCase();
        const profileSize = profile.querySelector('p:nth-child(3)').textContent.toLowerCase();

        if ((breed === "" || profileBreed.includes(breed)) &&
            (age === "" || profileAge.includes(age)) &&
            (size === "" || profileSize.includes(size))) {
            profile.style.display = "";
        } else {
            profile.style.display = "none";
        }
    });
});
document.querySelectorAll('.pet-profile button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "#contact";
    });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // Here you can add code to handle the form submission, e.g., sending the form data to a server
    this.reset();  // Reset the form fields
});
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// hamburger for menu
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  menuIcon.addEventListener('click', function() {
    nav.classList.toggle('show');

    // Toggle between hamburger and close icon
    if (nav.classList.contains('show')) {
      this.textContent = '✖'; // Close icon
    } else {
      this.textContent = '☰'; // Hamburger icon
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('show');
      menuIcon.textContent = '☰'; // Revert to hamburger icon
    });
  });
