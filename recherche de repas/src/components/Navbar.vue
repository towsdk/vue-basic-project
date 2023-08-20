<template>
    <header class="bg-white shadow h-16 flex justify-between items-stetch">

<router-link :to="{name: 'home'}">
   Home
</router-link>
<div class="flex items-center gap-1">
   <router-link :to="{name: 'byLetters'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Meals By Letter
   </router-link>
   <router-link :to="{name: 'byName'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Meals By Name
   </router-link>
   <router-link :to="{name: 'ingredeients'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 ">
      Meals By Ingredients
   </router-link>
   <!-- <router-link :to="{name: 'ingredeients'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 ">
      Ingredients
   </router-link> -->
</div>
</header>
</template>