<template>
    <!-- <pre>{{ meals }}</pre> -->
     <div class="grid grid-cols-3 gap-5 p-8">
    <!-- {{ meals }} -->
     <MealItem  v-for="meal of meals"
     :key="meal.idMeal" :meal="meal" />
   </div>
   <div v-if="!meals.length" class="flex justify-center">
    There are no meals
   </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  }
})
</script>