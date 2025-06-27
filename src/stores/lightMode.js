import { defineStore } from "pinia";
import { ref } from "vue";

const useDarkMode = defineStore('lightMode', () => {
    const mode = ref('light');

    function toggle() {
        if (mode.value === 'light')
            mode.value = 'dark';
        else 
            mode.value = "light";
    }

    return {mode, toggle}
})