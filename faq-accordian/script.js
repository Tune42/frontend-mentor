const elements = document.querySelectorAll('.faq');

elements.forEach(element => {
    element.addEventListener('click', (e) => {
        elements.forEach(element => {
            element.classList.remove('active');
        });
        element.classList.add('active');
    });
});