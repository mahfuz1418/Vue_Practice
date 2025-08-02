const { createApp, ref } = Vue

createApp({
    data() {
        return {
            mobile: "",
            name: {
                firstName: "",
                lastName: ""
            }
        };
    },

    watch: {
        mobile(newValue, oldValue){
            if (isNaN(newValue)) {
                alert("This is not a number");
                this.mobile = oldValue;
            }

            if (newValue.length == 11) {
                alert("OTP send successfully");
                this.mobile = oldValue;
            }
        },
        // "name.firstName": function (newValue, oldValue) {
        //     console.log(newValue);
        // }
        name: {
            deep: true,
            handler: function (newValue, oldValue) {
                console.log(newValue);
                
            }
        }
    }


}).mount('#app');