<template>
    <div class="flex flex-col p-8">
        <div>      
      <input type="text" class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals" />
        </div>

    
      <!-- {{ ingredients }} -->
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from 'vue'
  import store from '../store';
  import axiosClient from './axiosClient'

  const meals = computed(() => store.state.meals)
  const ingredients = ref([])

  // const a = "www.themealdb.com/api/json/v1/1/list.php?i=list"

  onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
  })
  </script>
  
  
  <style scoped>
  
  </style>
  