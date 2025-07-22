const { createApp, ref } = Vue

createApp({
    data() {
        return {
            name: ""
        };
    },
    methods: {
        handleKeyup(event){
            this.name = event.target.value;
        } ,
        handleSubmit(e){

            // e.preventDefault();
            console.log(e);
            
        }, 
        handleDiv(e){
            console.log(e);
        },
        handelView(e){
            // e.stopPropagation();
            console.log(e);
        }
    },
}).mount('#app');