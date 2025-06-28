<script setup>
    import { computed, onMounted, ref } from 'vue';

    const props = defineProps({
        "severity": {
            type: String,
            required: true
        },
        "duration": {
            type: [Number, String],
            required: false,
            default: 3000
        },
        "message": {
            type: String,
            required: false,
        },
        "title": {
            type: String,
            required: false
        }
    });
    const visible = ref(true);
    const icon = computed(() => {
        switch(props.severity) {
            case "error" :
                return "fa-regular fa-file-excel";
            case "success" : 
                return "fa-regular fa-circle-check";
            case "warning":
                return "fa-solid fa-circle-radiation";
            case "info":
                return "fa-regular fa-circle-question";
        }
    });

    const handleClose = () => {
        visible.value = false;
    }

    onMounted(() => {
        setTimeout(handleClose, props.duration);
    })

</script>

<template>
  <div
    v-if="visible"
    class="toast flex items-start p-4 rounded-lg min-w-28"
    :class="`${props.severity}-toast`"
  >
    <div class="flex-shrink-0">
        <font-awesome-icon 
        :icon="icon" 
        class="icon"/>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium title">{{ props.title }}</h3>
      <p class="mt-1 text-sm message">{{ props.message }}</p>
    </div>
    <button class="ml-auto close-btn">
      <svg class="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 20 20"
      @click="handleClose">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
    .toast {
      animation: slideIn 0.5s forwards, forwards 3s;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .success-toast {
        background-color: #f0fdf4;
        border: 2px solid #dcfce7;    
    }
    .success-toast .icon {
    color: #22c55e; /* text-green-500 */
    }

    .success-toast .title {
    color: #166534; /* text-green-800 */
    }

    .success-toast .message {
    color: #16a34a; /* text-green-600 */
    }

    .success-toast .close-btn {
    color: #4ade80; /* text-green-400 */
    }

    .success-toast .close-btn:hover {
    color: #22c55e; /* hover:text-green-500 */
    }

    /* Add similar blocks for other severities as needed */
    .error-toast {
    background-color: #fef2f2;
    border: 2px solid #fecaca;
    }
    .error-toast .icon,
    .error-toast .title,
    .error-toast .message,
    .error-toast .close-btn {
    color: #dc2626;
    }
    .error-toast .close-btn:hover {
    color: #b91c1c;
    }

    .warning-toast {
    background-color: #fffbeb;
    border: 2px solid #fde68a;
    }
    .warning-toast .icon,
    .warning-toast .title,
    .warning-toast .message,
    .warning-toast .close-btn {
    color: #ca8a04;
    }
    .warning-toast .close-btn:hover {
    color: #a16207;
    }

    .info-toast {
    background-color: #eff6ff;
    border: 2px solid #bfdbfe;
    }
    .info-toast .icon,
    .info-toast .title,
    .info-toast .message,
    .info-toast .close-btn {
    color: #2563eb;
    }
    .info-toast .close-btn:hover {
    color: #1d4ed8;
    }
</style>