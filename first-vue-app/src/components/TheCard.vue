<template lang="">
  <div class="card">
    <div class="card-title">{{cardTitle}}</div>
    <div class="card-body">
      <slot>
        This is default
      </slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
       
    },
    props: ["cardTitle"]
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