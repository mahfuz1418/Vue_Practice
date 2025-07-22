const { createApp, ref } = Vue

createApp({
    data() {
        return {
            num: "",
            result: ""
        };
    },
    methods: {
        // handleInput(e){
        //     this.num = e.target.value;
        // } ,
        getDouble(){
            this.result = this.num * 2;
        },
        getSqure(){
            this.result = this.num * this.num;
        },
        addTen(){
            this.result = this.num + 10;
        },
        Reset(){
            this.num = '';
            this.result = ''
        }
    },
}).mount('#app');