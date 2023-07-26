import { ref } from 'vue';

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    async function init() {
        try {
            const response = await fetch(url)
            const items = await response.json()
            //update state 
            data.value = items;
        }
        catch (err) {
            error.value = err
        }
    }
    init()
    return {
        data, error
    }
}