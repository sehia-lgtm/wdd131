document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');

    listItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('mouseenter', function() {
            item.classList.add('hovered');
        });
        link.addEventListener('mouseleave', function() {
            item.classList.remove('hovered');
        });
    });
});