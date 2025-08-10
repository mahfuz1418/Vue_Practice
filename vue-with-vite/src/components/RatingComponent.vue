<template lang="">
    <div class="rating">
        <div v-for="index in 5" :key="index" @click="handeRating(index)">
            <img src="/image/star.png" alt="" v-if="index <= modelValue">
            <img src="/image/unstar.png" alt="" v-if="index > modelValue">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    emits: ["update:modelValue"],
    methods: {
        handeRating(index){
            this.$emit("update:modelValue", index)
        }
    }
}
</script>
<style scoped>
    .rating{
        width: 200px;
        display: flex;
        align-items: center;
    }

    .rating img {
        width: 40px;
    }
</style>