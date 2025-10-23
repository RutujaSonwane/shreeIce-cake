


// Animate navbar color + height when scrolling
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main",{

    backgroundColor:"#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: "top -80%",
        scrub:2,
    },
})

gsap.from(".menu-list h4", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});

// Handle mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const body = document.body;

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // Lock scroll when menu is open
  body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
});

// Close menu when overlay clicked
overlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "";
});


