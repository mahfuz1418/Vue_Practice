<template lang="">
    <div>
        <div class="card">
            <div class="card-body">
                <label for="">Comment:</label>
                <textarea type="text" :value="modelValue" @input="handleInput" v-bind="$attrs"></textarea> <br>
            </div>
        </div>
        <button @click="$emit('continueClick')">{{buttonText}}</button>
    </div>
</template>


<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        buttonText: {
            type: String,
            default: ""
        },
    },
    // inheritAttrs: false,
    mounted() {
        // console.log(this.$attrs);
        
    },
    methods: {
        handleInput(e){          
           this.$emit("update:modelValue",e.target.value)
        }
    },
    // beforeCreate(){
    //         console.log("beforeCreate");
    //     },
    //     created(){
    //         console.log("created");
    //     },
    //     beforeMount(){
    //         console.log("beforeMount");
    //     },
    //     mounted(){
    //         console.log("mounted");
    //     },
    //     beforeUpdate(){
    //         console.log("beforeUpdate");
    //     },
    //     updated(){
    //         console.log("updated");
    //     },
    //     beforeUnmount(){
    //         console.log("beforeUnmount");
    //         alert("are you sure for hide");
    //     },
    //     unmounted(){
    //         console.log("unmounted");
    //     } 
}
</script>
<style scoped>
    .box {
        border: 1px solid red;
    }
</style>