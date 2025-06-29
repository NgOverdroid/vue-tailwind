<script setup>
    import { ref } from 'vue';

    const play = ref(false);
    const fullScreen = ref(false);
    const emits = defineEmits(['play', 'windBackward', 'windForward', 'toggleScreen']);

    const handlePlay = () => {
        play.value = !play.value;
        emits('play', play.value);
    }

    const handleForward = () => {
        emits('windForward');
    }

    const handleBackward = () => {
        emits('windBackward');
    }

    const toggleScreen = () => {
        fullScreen.value = !fullScreen.value;
        emits('toggleScreen', fullScreen.value);
    }
</script>

<template>
    <div class="controllers-container p-4 flex gap-4 items-center bg-gray-100 w-[700px]">
        <!--Backward Button-->
        <div @click="handleBackward">
            <font-awesome-icon icon="fa-solid fa-backward" class="cursor-pointer w-5"/>
        </div>
        <!--Play Button-->
        <div>
            <font-awesome-icon 
            :icon="`fa-solid ${ play ? 'fa-pause' : 'fa-play'}`"
            @click="handlePlay" 
            class="cursor-pointer w-5"/>
        </div>
        <!--Forward Button-->
        <div @click="handleForward">
            <font-awesome-icon icon="fa-solid fa-forward" class="cursor-pointer w-5" />
        </div>
        <!--Progress Barr-->
        <slot></slot>
        <!--Expand screen Button-->
        <div>
            <font-awesome-icon 
            :icon="`fa-solid ${ fullScreen ? 'fa-compress' : 'fa-expand'}`"
            @click="toggleScreen" 
            class="cursor-pointer w-5"/>
        </div>
    </div>
</template>