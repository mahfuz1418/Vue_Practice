const { createApp, ref } = Vue

createApp({
    data() {
        return {
            activeClass: "",
        };
    },
    methods: {
        setColor(color){
            this.activeClass = color;
        }
    },
}).mount('#app');