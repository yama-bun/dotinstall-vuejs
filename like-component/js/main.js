let likeComponent = Vue.extend({
    props: {
        message: {
            type: String,
            default: '高評価'
        }
    },
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="countUp">{{ message }}{{ count }}</button>',
    methods: {
        countUp() {
            this.count++;
            this.$emit('increment');
        }
    }
});

let app = new Vue({
    el: "#app",
    components: {
        'like-component': likeComponent
    },
    data: {
        total: 0
    },
    methods: {
        incrementTotal() {
            this.total++;
        }
    }

});