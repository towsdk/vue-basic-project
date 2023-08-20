<template>
      <div class="flex gap-2 justify-center">
        <!-- {{ letters }} -->
        <router-link :to="{name: 'byLetters', params: {letter}}" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
        </div>
        <Meals :meals="meals" />
</template>

<script setup>
// import MealItem from '../components/MealItem.vue'
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'


const letters = 'ABCDEFGHIDKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute();

const meals = computed(()=> store.state.mealsByLetter)

watch(route, ()=> {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(()=> {
store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>