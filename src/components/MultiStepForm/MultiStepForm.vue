<script setup>
    import FormHeader from './FormHeader.vue';
    import { ref } from 'vue';

    const currentPage = ref(1);
    const formPages = [
        {
            title: "Personal Information",
            explanation: "Please provide your personal details so we can know you better",
            labelOne: "Full Name",
            labelTwo: "Email Address",
            labelThree: "Phone Number",
            labelFour: "Portfolio/Github Link"
        },
        {
            title: "Skill Level",
            explanation: "Please tell us about your skill level in frontend development",
            labelOne: "Beginner",
            labelTwo: "Intermediate",
            labelThree: "Advance",
            labelFour: "Expert"
        }
    ];
    const pageOneData = ref({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        portfolioLink: '',
    })
    const totalPages = 4;

    const getNextPage = () => {
        currentPage.value++;
    }

    const getPrevPage = () => {
        currentPage.value--;
    }
</script>

<template>
    <div class="multistep-form p-6">
        <div class="flex justify-center mb-6">
            <FormHeader :page="currentPage" />
        </div>
        <form @submit.prevent="" class="border-t-2 border-gray-200">
            <div class="input-container flex flex-row w-full">
                <div>
                    <h1 class="text-xl font-semibold mb-4">{{ formPages[currentPage].title }}</h1>
                    <p>{{ formPages[currentPage].explanation }}</p>
                    <div class="space-y-4">
                        <input type="text"   placeholder="Name" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-purple-500">
                    </div>
                </div>
                <div>
                    <label class="text-xl font-semibold mb-4">Step 1: Personal Info</label>
                    <div class="space-y-4">
                        <input type="text"   placeholder="Name" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-purple-500">
                    </div>
                </div>
            </div>
            <div class="button-container flex flex-1 justify-between border-t-2 border-gray-200 pt-6">
                <button 
                @click="getPrevPage"
                :class="`w-30 py-3 ${currentPage > 1 ? 'visible' : 'invisible'} rounded-lg border-solid border-purple-700 border cursor-pointer font-bold`"
                >
                    Go back
                </button>
                <button 
                v-if="currentPage < totalPages"
                @click="getNextPage"
                class="w-30 py-3 bg-[#9810fa] rounded-lg text-white font-bold cursor-pointer"
                >
                    Next step
                </button>
                <button 
                v-if="currentPage === totalPages"
                type="submit"
                class="w-30 py-3 bg-[#9810fa] rounded-lg text-white font-bold cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>
<style scoped>
    .multistep-form {
        width: 700px;
    }
</style>