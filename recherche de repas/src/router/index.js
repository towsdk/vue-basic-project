import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import GuestLayout from '../components/GuestLayout.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsDetails from '../views/MealsDetails.vue'
import Ingredients from '../views/Ingredients.vue'

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
                path: '/by-letter/:letter?',
                name: "byLetters",
                component: MealsByLetter,
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: MealList,
            },
            {
                path: '/by-name/:name?',
                name: "byName",
                component: MealsByName,
            },
            {
                path: '/by-details/:id?',
                name: "mealDetails",
                component: MealsDetails,
            },
            {
                path: '/ingredients',
                name: "ingredeients",
                component: Ingredients,
            },
            {
                path: '/by-ingredients/:ingredient',
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