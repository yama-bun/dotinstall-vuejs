let vm = new Vue({
    el: "#app",
    data: {
        newItem: '',
        todos: [],
    },
    watch: {
        todos: {
            handler() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    mounted() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {

        addItem() {
            let item = {
                title: this.newItem,
                isDone: false
            };
            this.todos.push(item);
            this.newItem = '';
        },
        deleteItem(index) {
            if (confirm('削除してよいですか？')) {
                this.todos.splice(index, 1);
            } else {
                alert('取り消しました。');
            }
        },
        reset() {
            if (!confirm('完了タスク削除しますか？')) {
                return;
            }
            this.todos = this.remaining;
        }
    },
    computed: {
        remaining() {
            return this.todos.filter(function(todo) {
                return !todo.isDone;
            });
        }
    }
});