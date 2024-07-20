

export class Validations {

    static isNumberPhone( value ){
        const regex = /^(?:\+[0-9]{2,3}\s?)?[0-9]{6,10}$/;

        return regex.test(value)
            ? ['', true]
            : ['Numero invalido', false];
    }

    static isMailValid( value ){
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        return regex.test(value)
            ? ['', true]
            : ['Email invalido', false];
    }

    static allFieldRequired( form ){
        return Object.values( form ).every( (value)=> value );
    }
    
    static required(value) {
        return (value) ? ['', true] : ['Campo requerido', false];
    }


}