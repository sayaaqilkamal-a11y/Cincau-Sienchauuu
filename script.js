// Efek animasi text muncul perlahan
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });
});

// Tambahkan animasi fade-in
const style = document.createElement("style");
style.innerHTML = `
.hidden {opacity:0; transform: translateY(30px); transition: all 1s ease;}
.visible {opacity:1; transform: translateY(0);}
`;
document.head.appendChild(style);
