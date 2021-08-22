export default class Model {
    constructor() {
        this.view = null;
        if(!this.todos || this.todos.length < 1){
             this.todos = [
                 {
                     id: 0,
                     title: '',
                     description: '',
                 }
                    //  completed: false
            ]
            this.idAct = 1;    
        }else {
            this.idAct = this.todos[this.todos.length -1].id + 1;
        }
        
    }

    setView(view) {
        this.view = view;
    }
    
    getTodos() {
        return  this.todos.map((todo) => ({...todo})); // devuelvo una copia del array de todos       
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);

    }

    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed; // invierto el checkbox
        this.save();
    }

    aditTodoo(id, values) {
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values); // creo un nuevo objeto
        this.save();
    }

    addTodo(title, description) {
        const todo = {
            id: this.idAct++,
        // si una propiedad se llama igual que su valor lo puedo escribir asi...
            title,
            description,
            completed: false
        }
        this.todos.push(todo);
        console.log(this.todos);
        this.save();
        return {...todo}; // spread operator
    }

    removeTodo(id){
    // findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada
        const i = this.findTodo(id);
        this.todos.splice(i, 1);
        this.save();
    }
}
