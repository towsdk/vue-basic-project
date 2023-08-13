import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import GuestLayout from '../components/GuestLayout.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: MealList,
            },
            {
                path: '/by-letter/:letter?',
                name: "byLetters",
                component: MealsByLetter,
            },
            {
                path: '/by-name/:name?',
                name: "byName",
                component: MealsByName,
            },
            {
                path: '/by-ingredients/:ingredients?',
                name: "byIngredeients",
                component: MealsByIngredients,
            },
            
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;