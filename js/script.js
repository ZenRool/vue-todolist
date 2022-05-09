// Classe to do 
class Todo {
    
    constructor( task , done ) {
        this.task = task;
        this.done = done;
    }
}
const app = new Vue( {
    // div dom di Vue 
    el: "#root",
    data: ( {
        todo:
            [
                new Todo("Fai il millestone 1", true),
                new Todo("Fai il millestone 2", true),
                new Todo("Fai il millestone 3", true),
                new Todo("Fai il bonus 1", true),
                new Todo("Fai il bonus 2", true),
                new Todo("Porta fuori il cane", false),
                new Todo("Fai la spesa", false),
                new Todo("Prepara da mangiare", false),
                new Todo("Compra il CAFFÈ", false),
                new Todo("Fai il caffè", false)
            ],
        inputTodo: ""
    
    }),
    methods: {
        removeTodo(index) {
            this.todo.splice(index, 1);
        },
        addTodo() {
            // Trim per togliere gli spazi intorno al input 
            const input = this.inputTodo.trim();
            // Se l'utente ha digitato 2 o più caratteri diversi dallo spazio
            if(input.length > 1) {
                // Aggiungo l'input al array
                this.todo.push(new Todo(input ,false));
                // Resetto l'input
                this.inputTodo = "";
            }
        },
        // Toggle del done, inverte il done del oggetto dato in input
        toggleDone: element => element.done = !element.done

    }
} 
);

