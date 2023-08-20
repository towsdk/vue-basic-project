<template>
   <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for </h1>
  </div>
  {{ meals }}
   <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
// import MealItem from '../components/MealItem.vue'
import Meals from '../components/Meals.vue'


const route = useRoute();
// const ingredient = computed(()=> store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredients);

onMounted(() => {
    store.dispatch('searchMealByIngredients', route.params.ingredient)
})
</script>