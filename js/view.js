import AddTodo from './components/add-todo.js';

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        
        this.addTodoForm.onClick((title, description) => this.addTodoo(title, description));
    }

    setModel(model){ 
        this.model = model;
    }

    addTodoo(title, description) {
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
        this.addTodoForm.clearInputs();
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    removeTodo(id) {
        document.getElementById(id).remove();
        this.model.removeTodo(id);
    }

    render(){
        const todos = this.model.getTodos();
        todos.forEach((todo) =>  this.createRow(todo));
    }



    createRow(todo) {
        const row = table.insertRow(); // inserRow: crea un elemento para la tabla
        row.setAttribute('id', todo.id); // agrego un id como atributo a la tabla
        row.innerHTML = ` 
          <td>${todo.title}</td>
          <td>${todo.description}</td>
          <td class="text-center">
          </td>
          <td class="text-right">
          </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox); // añado a la 2 posicion de la tabla el checkbox actualizado

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class = "fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTodo(todo.id);
        row.children[3].appendChild(removeBtn);
    }
                
}
