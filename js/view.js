import AddTodo from './components/add-todo.js';

export default class View {
    constructor() {
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        
    }

    setModel(model){ 
        this.model = model;
    }

    render(){
        const todos = this.model.getTodos();
        todos.forEach((todo) =>  this.createRow(todo));
    }

    addFilters(filters) {
        const {type, words} = filters; // type = filters.type - word = filters.word
        // [, ...rows] -> con la , indico que el primer elemento no lo quiero
        const [, ...rows] = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            // es igual a poner: const title = row.children[0]
            const [title, description, completed] = row.children;
            let shouldHide = false;
            if(words) {
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            }
            const shouldBeCompleted = type === 'completed';
            const isCompleted = completed.children[0].checked;
            
            if((type !== 'all') && (shouldBeCompleted !== isCompleted)) {
                shouldHide = true;
            }

            if(shouldHide) {
                row.classList.add('d-none'); // escondo
            }else{
                row.classList.remove('d-none');
            }
            
        }
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
        row.children[2].appendChild(checkbox); // añado a la 2 posicion de la tabla el checkbox actualizado

    }
                
}
