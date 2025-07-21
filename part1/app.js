const { createApp, ref } = Vue

createApp({
    data() {
    // const msg = ref("this is message");
        return {
            msg :"this is message",
            data: {
                title: "This is first vue app",
                vueLink: "https://vuejs.org/guide/quick-start.html",
            },
            htmlCode: ' <a href="https://vuejs.org/guide/quick-start.html">Vue</a>',
            count: 0,
        };
    },
    methods: {
        increase(event, amount){
            this.count = this.count+amount;
            console.log(event);
            
        },

        decrease(amount){
            this.count = this.count-amount;
        },
        test(ev){
            console.log(ev);
            
        }   
    },
}).mount('#app');