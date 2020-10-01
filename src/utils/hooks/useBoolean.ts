import { ref, Ref } from 'vue';

export function useBoolean(initBoolean = false): {
    boolean: Ref<boolean>;
    setToFalse: () => void;
    setToTrue: () => void;
    toggle: () => void;
} {


    const boolean = ref(initBoolean)


    function setToFalse(): void {

        boolean.value = false
    }

    function setToTrue(): void {
        boolean.value = true

    }

    function toggle(): void {
        boolean.value = !boolean.value

    }

    return {
        boolean,
        setToFalse,
        setToTrue,
        toggle
    }

}