<template lang="">
    <div>
        <div class="card">
            <div class="card-body">
                <label for="">Name On Card:</label>
                <input type="text" @value="nameOnCard" @input="handleInput('update:nameOnCard', $event)"> <br>
  
                <label for="">Card Number:</label>
                <input type="text" @value="cardNumber" @input="handleInput('update:cardNumber', $event)"> <br>

                <label for="">Expiry:</label>
                <input type="text" @value="expiry" @input="handleInput('update:expiry', $event)"> <br>

                <label for="">CVV:</label>
                <input type="text" @value="cvv" @input="handleInput('update:cvv', $event)"> <br>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        nameOnCard: {
            type: String,
            default: ""
        },
        cardNumber: {
            type: String,
            default: ""
        },
        expiry: {
            type: String,
            default: ""
        },    
        cvv: {
            type: String,
            default: ""
        },
    },
    methods: {
        handleInput(eventName, e){
           this.$emit(eventName, e.target.value)
        }
    }
}
</script>
<style lang="">
    
</style>