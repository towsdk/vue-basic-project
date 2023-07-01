const app = Vue.createApp({
    data: function(){
        return{
            flavor: [
                {id: 1, name: 'Vanilla', price: 100},
                {id: 2, name: 'Chocolate', price: 200}, 
                {id: 3, name: 'Strawberry ', price: 300}, 
                {id: 4, name: 'Orange', price: 60}, 
                {id: 5, name: 'Lemon', price: 50}, 
            ],
            cart: [],
            showModal: false,
        }
    },
    methods: {
        addToCart(flavorId){
            this.cart.push(this.flavor.find(flavor => flavor.id === flavorId))
        },
        removeFromCart(flavorId){
            let position = this.flavor.findIndex(flavor => flavor.id 
                === flavorId);
            this.cart.splice(position, 1);
        },
        toggleModal(){
            this.showModal =  !this.showModal;
        },
        clearCart(){
            this.cart = [];
        }
    }, 
    computed: {
        total(){
            return this.cart.reduce((t, flavor) => t + flavor.price, 0)
        }
    }
});