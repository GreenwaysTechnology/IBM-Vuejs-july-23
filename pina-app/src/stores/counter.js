import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    //state declaration
    const counter = ref(0)
    //actions 
    function increment() {
        counter.value++
    }
    //getters: computed Properties 
    const doubeIt = computed(() => counter.value * 2)

    return { counter, increment, doubeIt }
});