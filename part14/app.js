const { createApp, ref } = Vue

createApp({
    data() {
        return {
            show: false,
            skills: [
                {name: 'HTML', experience: 5},
                {name: 'CSS', experience: 4},
                {name: 'JS', experience: 10},
                {name: 'LARAVEL', experience: 2},
                {name: 'Cotlin', experience: 1},
                {name: 'C++', experience: 4},
                {name: 'Dart', experience: 3},
                {name: 'Python', experience: 1},
            ],
        };
    },
    methods: {
        toggle(){
            this.show = !this.show;
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        }
    },
}).mount('#app');