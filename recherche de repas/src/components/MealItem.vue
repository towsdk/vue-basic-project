<template>
     <div 
    
      class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img 
        :src="meal.strMealThumb" 
        :alt="strMeal" 
        class="rounded-xl w-full h-48 object-cover" /> </router-link>
         <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-2">Lorem  aspernatur dolorem reiciendis, ex iusto
           ea molestias. S</p>
          <div class="flex items-center justify-between">
           <YoutubeButton :href="meal.strYoutube">
            Youtube </YoutubeButton>
          </div>
         </div>
      </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue'

const {meal} = defineProps({
    meal : {
      required: true,
      type: Object
    }
})
</script>