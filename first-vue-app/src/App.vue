<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
    <FirstComponent
        v-for="detail in details"
        :clientName="detail.cname"
        :address="detail.address"
        v-bind:key="detail.cname"

    >
    </FirstComponent>

    <hr>

    <TheCard cardTitle="This is First">
        <template v-slot:default>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eum aliquid aspernatur itaque tempora nobis iusto earum, non hic possimus mollitia sint soluta voluptas excepturi error amet dolorem vel quisquam! </p>
        </template>

        <template v-slot:footer>
            <a href="">Read More -></a>
        </template>
    </TheCard>
    <TheCard cardTitle="This is Second">
        <template v-slot:default>
            <div>
                <img style="width: 130px;" src="https://www.mobiledokan.com/media/realme-gt-7-icesense-black-official-color-image.webp" alt="">
                <span>This is new arrival mobile</span>
            </div>
        </template>

        <template v-slot:footer>
            No more option
        </template>
    </TheCard>

    <TheCard></TheCard>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import TheCard from './components/TheCard.vue';

    export default {
        data() {
            return {
                msg: "Hi this is first vue app",
                details: [{
                        cname: "Ahad",
                        address: "Mirpur 12"
                    },
                    {
                        cname: "Asif",
                    },
                    {
                        cname: "Wadud",
                        address: "Cox's Bazar"
                    },
                ]
            }
        },
        components: {
            FirstComponent,
            TheCard
        }
    }
</script>
