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
                new Todo("Fai il millestone 2", false),
                new Todo("Fai il millestone 3", false),
                new Todo("Fai il bonus 1", false),
                new Todo("Fai il bonus 2", false),
                new Todo("Porta fuori il cane", false),
                new Todo("Fai la spesa", false),
                new Todo("Prepara da mangiare", false),
                new Todo("Compra il CAFFÈ", false),
                new Todo("Fai il caffè", false)
            ]
    
    }),
    methods: {
    }
} 
);

