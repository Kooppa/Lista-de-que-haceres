import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo)); Es lo mismo que la liena de abajo
todoList.todos.forEach(crearTodoHtml);

// const tarea = new Todo('Aprender JS!!!');
// todoList.nuevoTodo(tarea);

// tarea.completado = true;


// console.log(todoList);

// crearTodoHtml(tarea);


