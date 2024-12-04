const filterButton = document.querySelectorAll('.catalog__filter-button');
const cardGrid = document.querySelectorAll('.card-grid');

filterButton.forEach(function (el) {
    el.addEventListener('click', openCardGrid);
});

function openCardGrid(evt) {
    const filterButtonTarget = evt.currentTarget;
    const button = filterButtonTarget.dataset.button;

    filterButton.forEach(function(item) {
        item.classList.remove('catalog__filter-button_active');
    });
    filterButtonTarget.classList.add('catalog__filter-button_active');

    cardGrid.forEach(function(item) {
        item.classList.remove('card-grid_active');
    });
    document.querySelector(`#${button}`).classList.add('card-grid_active');s
};