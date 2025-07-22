const { createApp, ref } = Vue

createApp({
    data() {
        return {
            // skills: ['HTML', 'CSS', 'JS', 'LARAVEL'],
            skills: [
                {name: 'HTML', experience: 5},
                {name: 'CSS', experience: 4},
                {name: 'JS', experience: 10},
                {name: 'LARAVEL', experience: 2},
            ],
            newSkill: {name: '', experience: ''}
        };
    },
    methods: {
        addSkill(){
            this.skills.push({name: this.newSkill.name, experience: 0});
            this.newSkill = {};
        },
        removeSkill(i){
            this.skills.splice(i,1);
        }
    },
}).mount('#app');