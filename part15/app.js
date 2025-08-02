const { createApp, ref } = Vue

createApp({
    data() {
        return {
            review: "",
            skills: [
                {name: 'HTML', experience: 5},
                {name: 'CSS', experience: 4},
                {name: 'JS', experience: 11},
                {name: 'LARAVEL', experience: 2},
                {name: 'Cotlin', experience: 14},
                {name: 'C++', experience: 15},
                {name: 'Dart', experience: 3},
                {name: 'Python', experience: 1},
            ],
        };
    },

    computed: {
        totalSlills(){
            return this.skills.length;
        },

        experiencedPeople(){
            let es = this.skills.filter((item) => {
                return item.experience > 10;
            });
            return es;
        }
    },

    methods: {
        removeSkill(i){
            this.skills.splice(i, 1);
        },
        totalSlillCount(){
            console.log('from method');
            
            return this.skills.length;
        }
    },
}).mount('#app');