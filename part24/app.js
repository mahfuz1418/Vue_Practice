var app = Vue.createApp({
    data(){
        return {
            name: "kuddus",
        }
    }
});

app.component('first-component', {
    data(){
        return {};
    },
    template: 
    `
      <label for="">Name</label>
      <input type="text">
      <br><br>
      <label for="">Password</label>
      <input type="password" name="" id="">

      <br>
      <button type="submit">Submit</button>
    `
});

app.mount("#app");

