window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", Window.scrollY > 0);
});