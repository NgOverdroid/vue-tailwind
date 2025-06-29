<script setup>
    import { provide, useTemplateRef, ref } from 'vue';
    import VideoControlPanel from './VideoControlPanel.vue';
    import ProgressBar from './ProgressBar.vue';

    const video = useTemplateRef("videoRef");
    const currentTime = ref(0);
    const skipNum = 5;

    provide('currentTime', currentTime);

    const handlePlay = (playing) => {
        if(playing)
            video.value.play();
        else 
            video.value.pause();
    }

    const handleBackward = () => {
        if(video.value.currentTime < skipNum)
            video.value.currentTime = 0;
        else
            video.value.currentTime -= skipNum;
    }

    const handleForward = () => {
        if((video.value.currentTime + skipNum) > video.value.duration)
            video.value.currentTime = video.value.duration;
        else
            video.value.currentTime += skipNum;
    }

    const handleVideoEnded = () => {
        video.value.pause();
        video.value.currentTime = 0;
    }

    const handleTimeUpdate = () => {
        currentTime.value = video.value.currentTime;
    }

    const toggleScreen = (fullScreen) => {
        if (fullScreen)
            return;
        else 
            return;
    }

</script>

<template>
    <div>
        <video 
        ref="videoRef"
        width="700px"
        muted
        @ended="handleVideoEnded"
        @timeupdate="handleTimeUpdate">
            <source src="../../assets/videoplayback.mp4" type="video/mp4"/>
            <source src="" type="video/webm"/>
        </video>
        <VideoControlPanel
        @play="handlePlay"
        @wind-backward="handleBackward"
        @wind-forward="handleForward"
        @toggle-screen="toggleScreen"
        >
            <ProgressBar/>
        </VideoControlPanel>
    </div>
</template>