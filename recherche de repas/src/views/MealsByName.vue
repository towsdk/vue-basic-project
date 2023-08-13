 <template>
   <div class="p-8">
    <input 
    type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"/>
   </div>
   <div><pre>{{ meals }}</pre></div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import store from "../store";

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
  //  store.dispatch('searchMeals', keyword.value);
  if (keyword.value) {
    store.dispatch("searchMeals1", keyword.value);
  } 
}
</script>