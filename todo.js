var todolist = new Vue({
  el: '#todolist',
  data: {
    todos: [
      { name: 'Зробити ТУДУ лист', done: false },
      { name: 'Залити його на ГИТ', done: false },
      { name: 'Чекати, що скаже Ігор (я хатіко)', done: false },
    ]
  },
  methods: {
    addTodo: function(e) {
      e.preventDefault();
      this.todos.push({
        name: this.todos.name,
        done: false
      });
    },
    deleteTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
});