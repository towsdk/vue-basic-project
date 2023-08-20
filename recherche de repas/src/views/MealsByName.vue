 <template>
   <div class="p-8 pb-0">
    <input 
    type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"/>
   </div>
   <Meals :meals="meals"/>
</template>

<script setup>
// import YoutubeButton from '../components/YoutubeButton.vue'
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
// import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue'



const keyword = ref('')
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

function searchMeals(){
  //  store.dispatch('searchMeals', keyword.value);
  if (keyword.value) {
    store.dispatch("searchMeals1", keyword.value);
  } 
}

onMounted(()=> {
  keyword.value = route.params.name
  if(keyword.value){
    searchMeals()
  }
})

</script>