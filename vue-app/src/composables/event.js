import { onMounted, onUnmounted, ref } from 'vue';

export function useEventListener(target, event, callback) {

    onMounted(() => {
        //dom listener
        target.addEventListener(event, callback)
    })
    onUnmounted(() => {
        target.removeEventListener(event, callback)
    })
}