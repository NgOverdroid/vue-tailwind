<script setup>
    const props = defineProps({
        page: {
            type: Number,
            default: 1,
        }
    });
</script>

<template>
    <div class="w-fit flex items-center gap-4">
        <template v-for="n in 4">
            <div 
            v-if="n > 1"
            :id="`line-${n}`" 
            :style="{backgroundColor: props.page >= n ? '#9810fa' : '#d1d5dc'}"
            class="w-16 h-1 bg-gray-300 left-0 top-1/2 transform translate-y-[-50%] z-[-1] transition-colors duration-300"></div>
            <div 
            :id="`indicator-${n}`"
            :style="{backgroundColor: props.page >= n ? '#9810fa' : '#d1d5dc'}" 
            class="w-9 h-9 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold transition-colors duration-300">{{ n }}</div>
        </template>
    </div>
</template>