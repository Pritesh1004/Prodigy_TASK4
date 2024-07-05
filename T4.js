document.querySelectorAll('nav ul li a').forEach(anchor =>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollbtn = document.getElementById('scrollbtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollbtn.style.display = 'block';
    }else {
        scrollbtn.style.display = 'none';
    }
});

scrollbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});