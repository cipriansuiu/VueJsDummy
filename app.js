new Vue({
    el: '#exercise',
    data: {
        value: 'dsadsad'
    },
    methods: {
        alertOnClicked: function(event) {
            alert('Button Clicked');
        },

        getValue: function(event) {
            this.value = event.target.value;
        },

        getValueOnEnter: function(event) {
            this.value = event.target.value;
            console.log(event)
        }
    }
});