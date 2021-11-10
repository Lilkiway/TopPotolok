import 'regenerator-runtime/runtime';

 function form(formSelector, phoneSelector, alertMessageSelector) {
    $(phoneSelector).mask("+380(99) 999-99-99");

    const  forms = document.querySelectorAll(formSelector);

    const sendForm = async (form, message) => {
        message.innerHTML = '<img src="./src/img/gif/Pulse.gif" alt="...loading"></img>';
        const response = await fetch('sendmail.php', {
            method: 'POST',
            body: form
        });

        if(!response.ok) {
            throw new Error(`статус помилки ${response.status}`)
        }

        return await response.text();
    }

    forms.forEach(form => {
        const alertMessage = form.querySelector(alertMessageSelector);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            let error = formValidate(form);

            if(error === 0) {
                sendForm(formData, alertMessage)
                .then((response) => {
                    alertMessage.innerHTML = 'Спасибі! Чекайте на дзвінок:)';
                    form.reset();
                })
                .catch(() => alertMessage.innerHTML = 'Помилка')
                .finally(() => {
                    setTimeout(() => {alertMessage.innerHTML = ''}, 5000)
                })
            } else {
                    alertMessage.innerHTML = 'Вкажіть номер телефону';
                }
        });
    })

    const formValidate = (form) => {
        let error = 0;
        const phoneInput = form.querySelector(phoneSelector);
    
        formRemoveError(phoneInput);

        if(phoneInput.value === '') {
            formAddError(phoneInput);
            error++;
        }

        return error;
    }
            
    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }
}

export default form;