
export class Todo {
    constructor( tarea ) {
        this.tarea = tarea;

        this.id = new Date().getTime(); //15185841
        this.completado =false;
        this.creado = new Date();
    }

}