var elements = document.querySelectorAll('.faq');
//submission failing using const

elements.forEach(element => {
    element.addEventListener('click', (e) => {
        elements.forEach(element => {
            element.classList.remove('active');
        });
        element.classList.add('active');
    });
});