import Alert from './alert.js';

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.alert = new Alert('alert');

    }

    onClick(callBack) {
        this.btn.onclick = () => {
            if((title.value === '') || (description.value === '')){
                this.alert.show('Agregue un título y una descripción');
            }else {
                this.alert.hide(); // si funciona, oculto el alert
                callBack(this.title.value, this.description.value);
            }        
        }
    }

    clearInputs() {
        this.title.value = '';
        this.description.value = '';

    }
}