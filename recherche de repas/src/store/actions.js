import axiosClient  from '../views/axiosClient'

export function searchMeals1({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
     .then(({data}) => {
        commit('setSearchedMeals', data.meals)
     })
}