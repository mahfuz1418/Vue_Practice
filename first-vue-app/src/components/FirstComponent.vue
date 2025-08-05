<template>
    <div class="top-section">
        <!-- <label for="">Name</label>
        <input type="text">
        <br><br>
        <label for="">Password</label>
        <input type="password" name="" id="">

        <br>
        <button type="submit">Submit</button>

        <br> -->

        <label for="">Name: </label> <strong>{{ clientName }}</strong> <br>
        <label for="">Address: </label> <strong>{{ address }}</strong>
    </div>

</template>

<script>
    export default {
        props:{ 
            clientName: String,
            address: {
                type: String,
                required: true,
                default: "Dhaka"
            }
         },
        data(){
            return {
                name: "ahad"
            };
        }
    }
</script>

<style scoped>
.top-section{
    padding: 10px;
    border: 1px solid gray;
    width: 40%;
    margin: 10px;
}
</style>