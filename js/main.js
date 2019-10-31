(function(){
    const slider = document.querySelector('.items');
    let isActive = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isActive = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.offsetLeft;
        
    });

    slider.addEventListener('mouseleave', () => {
        isActive = false;
        slider.classList.remove('active');
        
    });

    slider.addEventListener('mouseup', () => {
        isActive = false;
        slider.classList.remove('active');
        
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isActive) return;
        e.preventDefault();
    });
}());