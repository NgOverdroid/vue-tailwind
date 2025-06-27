<script setup>
  import { ref } from 'vue';
  import StarRatings from "@/components/StarRatings/StarRatings.vue";
</script>

<template>
  <StarRatings
  :total="8"
  gap="10px"
  size="40px"
  />
</template>
