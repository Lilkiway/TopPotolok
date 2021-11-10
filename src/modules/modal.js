function modals(triggerSelector, descBtnSelector, modalSelector, closeSelector, menuSelector) {
    const trigger = document.querySelector(triggerSelector),
          descBtns = document.querySelectorAll(descBtnSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          menu = document.querySelector(menuSelector),
          scroll = calcScroll();

    showModal(trigger);
    descBtns.forEach(btn => {showModal(btn)});

    function showModal(element) {
        element.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scroll}px`;
            trigger.style.marginRight = `${scroll}px`;
            menu.style.marginRight = `${scroll}px`;
        });
    }

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';
        trigger.style.marginRight = '0px';
        menu.style.marginRight = '0px';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0px';
            trigger.style.marginRight = '0px';
            menu.style.marginRight = '0px';
        }
    });

    setTimeout(() => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scroll}px`;
    }, 15000);

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

}

export default modals;