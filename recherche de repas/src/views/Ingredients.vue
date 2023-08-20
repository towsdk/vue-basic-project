<template>
    <div class="p-8">
        <h3 class="text-4xl font-bold mb-3">Ingrdient.vue</h3>
        
        <!-- {{ ingredients }} -->
        <router-link 
             v-for="ingredient of ingredients" :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow"
             :to="{
            name: 'byIngredeients',
            params: {ingredient: ingredient.strIngredient},
             }" >
         
           <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
           <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "./axiosClient";

const ingredients = ref();

onMounted(()=> {
    // debugger;
    axiosClient.get("list.php?i=list")
    
     .then(({data})=> {
        ingredients.value = data.meals
     })
})
</script>