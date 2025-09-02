// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = document.querySelector(".navbar").offsetHeight
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Form submission
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    whatsapp: document.getElementById("whatsapp").value,
    message: document.getElementById("message").value,
  }

  // Here you would typically send the data to your backend
  console.log("Form submitted:", formData)

  // Show success message
  alert("Orçamento solicitado com sucesso! Entraremos em contato em breve.")

  // Reset form
  document.getElementById("quoteForm").reset()
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".navbar").offsetHeight
      const elementPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  })
})

// Fade in animation on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", fadeInOnScroll)

// Auto-advance testimonial carousel
document.addEventListener("DOMContentLoaded", () => {
  const bootstrap = window.bootstrap // Declare the bootstrap variable
  const carousel = new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
    interval: 5000,
    wrap: true,
  })
})

// Mobile menu close on link click
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse")
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse) // Use window.bootstrap
      bsCollapse.hide()
    }
  })
})

// WhatsApp mask for phone input
document.getElementById("whatsapp").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "")

  if (value.length >= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
  }

  e.target.value = value
})

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in class to elements that should animate
  const animateElements = document.querySelectorAll(".card, .hero-content, .hero-image")
  animateElements.forEach((element) => {
    element.classList.add("fade-in")
  })

  // Trigger initial check
  fadeInOnScroll()
})
