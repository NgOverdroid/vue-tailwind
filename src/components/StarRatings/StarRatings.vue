<script setup>
    import { ref, computed } from "vue";
    
    const props = defineProps(
        {
            total: {
                type: Number,
                required: true,
            },
            size: {
                type: String,
                required: false,
                default: "16px"
            },
            gap: {
                type: String,
                required: false,
                default: "0px"
            }
        }
    );
    const emits = defineEmits(['rated']);
    const rating = ref(0);

    const starStates = computed(() => {
        if (rating > 10)
            return 0;
        
        const stars = new Array(props.total);

        for (let i = 0; i < props.total; i++) {
            if (rating.value >= i + 1)
                stars[i] = "fa-solid fa-star";
            else
                stars[i] = "fa-regular fa-star";
        }

        return stars;
    });

    const handleRating = (index) => {
        if (rating.value === ++index)
            rating.value = --index;
        else
            rating.value = index;

        emits('rated', rating.value);
    };
</script>

<template>
    <div 
    class="cursor-pointer flex"
    :style="{
      fontSize: props.size,
      gap: props.gap
    }"
    >
        <font-awesome-icon 
        v-for="(starState, index) in starStates"
        :icon="starState"
        :data-star-index="index + 1"
        @click="handleRating(index)" 
        style="color: #FFD43B;"/>
    </div>
</template>