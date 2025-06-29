<script setup>
    import { computed, inject, useTemplateRef } from 'vue';

    const progressBarContainer = useTemplateRef('progressBarContainer');
    const currentTime = inject('currentTime');

    const timeStamp = computed(() => {
        const time = Math.round(currentTime.value);
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return { 
            hours: hours < 10 ? `0${hours}:` : `${hours}:`, 
            minutes: minutes < 10 ? `0${minutes}:` : `${minutes}:`, 
            seconds: seconds < 10 ? `0${seconds}` : seconds
        };
    });

</script>
<template>
    <div>
        <span aria-label="timer">{{ timeStamp.hours + timeStamp.minutes + timeStamp.seconds }}</span>
    </div>
    <div 
    ref="progressBarContainer"
    class="h-2 bg-gray-300 w-full border border-gray-300 rounded-md"> 
        <span class="progress-bar bg-[#f5a623]"
        ></span>
    </div>
</template>