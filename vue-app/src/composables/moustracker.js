import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouseTrack() {
    const x = ref(0)
    const y = ref(0)
    useEventListener(window, 'mousemove', evt => {
        x.value = evt.pageX
        y.value = evt.pageY
    })
    return {
        x, y
    }
}