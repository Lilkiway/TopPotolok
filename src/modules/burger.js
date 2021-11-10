function burgerMenu(burgerSelector, menuListSelector) {
    const burger = document.querySelector(burgerSelector),
          menu = document.querySelector(menuListSelector);

    function toggleMenu() {
            for (let elem of burger.children) {
                elem.classList.toggle('change');
            }
            menu.classList.toggle('menu_show');
            document.body.classList.toggle('lock');
    }

    menu.addEventListener('click', () => {
        toggleMenu();
    })

    burger.addEventListener('click', () => {
        toggleMenu();
    })
}

export default burgerMenu;