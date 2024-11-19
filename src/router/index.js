import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TermsAndConditionsView from '../views/TermsAndConditionsView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/terms-and-conditions",
            name: "terms-and-conditions", 
            component: TermsAndConditionsView
        },
    
    ],
    scrollBehavior(to) {
        if (to.hash) {
          const section = document.querySelector(to.hash);
          if (section) {
            return {
              top: section.offsetTop - 100, // Adjust based on navbar height
              behavior: 'smooth',
            };
          }
        }
        return { top: 0 }; // Scroll to top if no hash
      },
})

export default router;