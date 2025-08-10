<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
   
    <CreditCard v-model:nameOnCard="nameOnCard" v-model:cardNumber="cardNumber" v-model:expiry="expiry" v-model:cvv="cvv"></CreditCard>

    <br>
    <hr>
    <br>

    <strong>Name On Card: </strong>{{ nameOnCard }}<br>
    <strong>cardNumber: </strong>{{ cardNumber }}<br>
    <strong>expiry: </strong>{{ expiry }}<br>
    <strong>cvv: </strong>{{ cvv }}
</template>

<script>
import CreditCard from './components/CreditCard.vue';

    export default {
        data() {
            return {
                msg: "Hi this is first vue app",
                nameOnCard: "",
                cardNumber: "",
                expiry: "",
                cvv: ""
            }
        },
        components: {
            CreditCard
        },
        methods: {

        }
    }
</script>
