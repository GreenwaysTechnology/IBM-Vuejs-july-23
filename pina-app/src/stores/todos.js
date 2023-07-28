import { defineStore } from "pinia";

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos: [],
            err: null
        }
    },
    actions: {
        async getTodos(url) {
            try {
                const response = await fetch(url)
                const todos = await response.json();
                this.todos = todos
                console.log(this.todos)
            }
            catch (err) {
                this.err = err
                console.log(this.err)
            }
        }
    },
    //getters 
    getters: {
        todoslist: state => state.todos
    }

})