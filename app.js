const app = new Vue({
    el: "#app",
    data: {
        address: "",
        products: { 
            clowns: {quantity: '', weight: 112.00},
            dolls: {quantity: '', weight: 75.00} 
        },
        cost_gram: '',
        delivery_cost: 0.00
    },
    computed:{
        getDeliveryCost(){
            total_clowns_weight = this.products.clowns.quantity * this.products.clowns.weight
            total_dolls_weight = this.products.dolls.quantity * this.products.dolls.weight
            this.delivery_cost = ((total_clowns_weight + total_dolls_weight) * this.cost_gram).toFixed(2)
            return this.delivery_cost
        }
    }
})