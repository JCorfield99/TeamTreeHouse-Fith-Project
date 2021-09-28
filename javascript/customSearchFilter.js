function imageSearch() {
    const searchBar = document.getElementById('search');
    searchBar.addEventListener('keyup', e => {
        const searchString = e.target.value;
        for(let i = 1; i <= 12; i++) {
            let image = document.querySelector('.img' + i);
            let caption = image.getAttribute('data-caption');
            if(!caption.includes(searchString)) {
                image.style.display = 'none';
            } else {
                image.style.display = 'flex';
            }
        }
    });
}