

export class FormUtils {

    static validateForm( form ){
        for (const key of Object.keys(form)) {
            const [message, valid] = FormUtils.validarByKey( form, key);

            if (!valid) {
                return [message, valid, key];
            };
        }

        return ['', true, null];
    }

    static validarByKey( form, key ){
        const { text, validations } = form[key];
        if (validations.length > 0) {
            for (let index = 0; index < validations.length; index++) {
                const validator = validations[index];
                const [message, isValid] = validator(text);
                //? Si alguna validacion da falso, entonces se retorna el mensaje de error y el valor boolean
                if (!isValid) return [message, isValid];
            }
        }

        return ['', true];
    }

    static validarByValue( validations, value ){
        if (validations.length > 0) {
            for (let index = 0; index < validations.length; index++) {
                const validator = validations[index];
                const [message, isValid] = validator(value);
                //? Si alguna validacion da falso, entonces se retorna el mensaje de error y la key del form
                if (!isValid) return [message, isValid];
            }
        }

        return ['', true];
    }

    static showInfoAllForm(
        { inputs, spanError, message, key, isValid, form }
    ) {
        for (let i = 0; i < inputs.length; i++) {
            if (key == inputs[i].name) {
                if (!isValid) {
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('text-red-500');
                    spanError.style.display = 'block';
                    spanError.textContent = message;
                    return;
                }
            }
        }

        if (isValid) {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('valid', 'text-valid');
                inputs[i].classList.remove('text-red-500');
            }
            for (const key of Object.keys(form)) {
                const span = document.getElementById(key);
                span.style.display = 'none';
            }
        }
    }

    static showInfoOneInput(input, message, isValid ){
        const span = input.nextElementSibling;
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('text-red-500');
            span.style.display = 'none';
            span.textContent = '';
        }else{
            input.classList.add('text-red-500');
            input.classList.remove('valid');
            span.style.display = 'block';
            span.textContent = message;
        }
    }
}
