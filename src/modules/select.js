function select(optionsSelector, parentSelector, selectSelector, descSelector, arrowSelector) {
    const options = document.querySelectorAll(optionsSelector),
          parent = document.querySelector(parentSelector),
          select = document.querySelector(selectSelector),
          arrow = document.querySelector(arrowSelector),
          desc = document.querySelector(descSelector);

    function toggleOptions() {
        parent.classList.toggle('option_hide');
        arrow.classList.toggle('option-arr-active');
    }

    function showTextContent() {
        options.forEach((item)=> {
            item.addEventListener('click', () => {
                desc.innerHTML = item.textContent;
                toggleOptions();
            })
        })
    }

    select.addEventListener('click', () => toggleOptions());
    showTextContent();
}

export default select;