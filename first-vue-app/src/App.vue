<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
    <!-- <FirstComponent
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

    <TheCard></TheCard> -->

    <ProductCard v-for="product in product" :key="product.name" :product="product" @buy-now-click="buyNow" @add-to-cart="addToCart" @toggle-favourit="handeToggle">

    </ProductCard>


</template>

<script>
// import FirstComponent from './components/FirstComponent.vue';
// import TheCard from './components/TheCard.vue';
import ProductCard from './components/ProductCard.vue';

    export default {
        data() {
            return {
                msg: "Hi this is first vue app",
                details: [
                    {
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
                ],
                product: [
                    {
                        name: "Iphone",
                        price: "50000",
                        img: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-T-Mobile-256-GB-Deep-Purple-Refurbished_1385d15c-17b0-4392-8fc1-414cae1a51ed.75f6972b7faabe8490df9e82084adf01.jpeg",
                        favourit: true
                    },
                    {
                        name: "Xiaomi",
                        price: "3000",
                        img: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-T-Mobile-256-GB-Deep-Purple-Refurbished_1385d15c-17b0-4392-8fc1-414cae1a51ed.75f6972b7faabe8490df9e82084adf01.jpeg",
                        favourit: false
                    },
                    {
                        name: "Samsung",
                        price: "4000",
                        img: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-T-Mobile-256-GB-Deep-Purple-Refurbished_1385d15c-17b0-4392-8fc1-414cae1a51ed.75f6972b7faabe8490df9e82084adf01.jpeg",
                        favourit: false,
                    }
                ]
                    
                    

                
            }
        },
        components: {
            // FirstComponent,
            // TheCard,
            ProductCard
        },
        methods: {
            buyNow(event){
                console.log(event);
            },
            addToCart(event){
                console.log(event);
            },
            handeToggle(product){
                product.favourit = !product.favourit;
                
            }
        }
    }
</script>
