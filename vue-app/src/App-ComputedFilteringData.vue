<script>
import TODOS from './mock-data/todos'
export default {
    data() {
        return {
            todos: TODOS,
            searchQuery: null
        }
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                //filter logic
                return this.todos.filter(item => {
                    console.log(item)
                    return this.searchQuery.toLowerCase().split(" ").every(v => item.title.toLowerCase().includes(v))
                });
            } else {
                return this.todos
            }
        }
    }
}
</script>
<template>
    <div>
        <div>
            <input v-model="searchQuery" type="text">
            <div v-for="todo in resultQuery" :key="todo.id">
                   <p> {{todo.id}} {{ todo.title }}</p> 
            </div>
        </div>
    </div>
</template>