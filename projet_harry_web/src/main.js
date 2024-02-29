import { createApp } from 'vue'
import router from './router'

import PageAccueil from './views/PageAccueil.vue'

createApp(PageAccueil).use(router).mount('#app')