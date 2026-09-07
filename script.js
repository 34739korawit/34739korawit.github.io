// เปลี่ยนสีของปุ่มเมื่อเลื่อนหน้าเว็บ
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// Animation เมื่อเลื่อนมาถึงส่วนต่าง ๆ
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.7s ease";

    observer.observe(section);

});
