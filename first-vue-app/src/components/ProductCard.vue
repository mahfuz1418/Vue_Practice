<template lang="">
  <div class="card">
    <div class="card-title" style="display: flex; justify-content:space-between;">
      <div>{{product.name}}</div>
      <div>
        <img v-if="product.favourit" src="image/star.png" style="width:20px" @click="toggleFavourit">
        <img v-else src="image/unstar.png" style="width:20px"  @click="toggleFavourit">
      </div>

    </div>
    <div class="card-body">
      <img :src="product.img" style="width:150px">
      <strong>${{product.price}}</strong>
    </div>
    <div class="card-footer">
      <button @click="handleBuyNow">Buy Now</button>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
       
    },
    // emits:{
    //   "buy-now-click": function (data) {
    //     if (!data) {
    //       console.error("Data not found!!");
          
    //       return false;
    //     }
    //     return true;
    //   }
    // },
    props: {product: { type: Object, default: () => ({}) }},
    methods: {
      handleBuyNow() {
        this.$emit("buy-now-click", this.product);
      },
      addToCart() {
        this.$emit("add-to-cart", this.product);
      },
      toggleFavourit() {
        this.$emit("toggle-favourit", this.product)
      }
    },
}
</script>

<style scoped>
     .card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      width: 300px;
      padding: 10px;
      border: 1px solid gray;
      margin: 10px;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
      background-color: cadetblue;
    }

    .card-body {
      font-size: 1rem;
      color: #555;
    }

    .card-footer{
        background-color:crimson;
        padding: 5px;
    }
</style>