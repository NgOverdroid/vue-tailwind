import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleRadiation, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar, faFileExcel, faCircleQuestion, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import App from './App.vue'
import router from './router'

library.add(faSolidStar, faRegularStar, faFileExcel, faCircleRadiation, faCircleQuestion, faCircleCheck);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
