<template>

    <div class="container">
        <div>
        <h1>{{ msg }}</h1>
        </div>

        <hr>

        <TheComment v-model="myComment" class="box" buttonText="CLick"  @click="handelClick" @continueClick="handelContinueClick()">

        </TheComment>
        <br>
        {{ myComment }}


        <TheDialogue heading="This is heading" v-if="showDialog">
            <p>Are You want to continue?</p>
            <br>
            <button @click="showDialog=false">Yes</button>
            <button @click="showDialog=false">No</button>
        </TheDialogue>

        <button @click="showNotification">Show Notification</button>

        <TheNotification v-for="(n,i) in notifications" :text="n" :key="i">

        </TheNotification>
    </div>
    <br>
    <hr>
    <br>

    <div>
        <div class="tab">
            <div class="tab__menu">
                <div v-for="tab in tabs" class="tab__menu-item" :class="{'tab__menu-item--active' : activeTab == tab}" @click="activeTab = tab">
                    {{ tab }}
                </div>
            </div>
        </div>

        <div class="tab__content">
            <!-- <TheLogin v-if="activeTab == 'Login'"></TheLogin>
            <Register v-if="activeTab == 'Register'"></Register> -->

            <KeepAlive>
                <component :is="activeTab"></component>
            </KeepAlive>
        </div>
    </div>




    
</template>

<script>
import Register from './components/Register.vue';
import TheComment from './components/TheComment.vue';
import TheDialogue from './components/TheDialogue.vue';
import TheLogin from './components/TheLogin.vue';
import ContactDetails from './components/ContactDetails.vue';
import TheNotification from './components/TheNotification.vue';

    export default {
        data() {
            return {
                msg: "Hi this is first vue app",
                myComment: "Mr.",
                showDialog: false,
                notifications: [],
                tabs: ['TheLogin', 'Register', 'ContactDetails'],
                activeTab: 'TheLogin',
                name: 'Ahad',
                websiteAddress: 'www.ahad.com',
                address: 'Mirpur - 12',
            }
        },
        provide() {
            return {
                name: this.name,
                websiteAddress: this.websiteAddress,
                address: this.address,
            }
        },
        components: {
            TheComment,
            TheDialogue,
            TheNotification,
            TheLogin,
            Register,
            ContactDetails
        },
        methods: {
            handelClick(){
                // console.log('clicked');
            },
            handelContinueClick(){
                this.showDialog = true
            },
            showNotification(){
                this.notifications.push("This is notification");
                setTimeout(() => {
                     this.notifications.shift();
                }, 2222);
            }
        },
        
    }
</script>

<style>

.container{
    color: green;
    border: 1px solid black;
    /* font-size: 25px; */
}


button {
  margin: 5px;
  padding: 5px 11px;
  cursor: pointer;
}

.shadowed {
  box-shadow: 0 0 3px 2px #111;
}

.tab {
}

.tab__menu {
  display: flex;
}

.tab__menu-item {
  padding: 6px 15px;
  background-color: #dbdbdb;
  cursor: pointer;
}

.tab__menu-item--active {
  color: #fff;
  background-color: rgb(27, 104, 192);
}

input {
  padding: 5px 11px;
  margin-bottom: 11px;
}

textarea {
  padding: 5px 11px;
  margin-bottom: 11px;
  width: 100%;
}
</style>