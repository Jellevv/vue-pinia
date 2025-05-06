<template>
  <div>
    <h2>Todo List</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="newTodo" @keyup.enter="addTodo()">
      <button class="btn btn-primary" @click="addTodo()">Add</button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="task in TaskStore.tasksValue" :key="task.id">
        <input type="checkbox" v-model="task.isDone" /> {{ task.title }}
        <button class="btn btn-danger btn-sm float-end" @click="removeTodo(task)">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { useTaskStore } from "@/stores/TaskStore";
import { mapStores } from "pinia";

export default {
  computed: {
    ...mapStores(useTaskStore), // => Store aangemaakt
  },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.TaskStore.addTask(this.newTodo.trim());
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.TaskStore.removeTask(index);
    }
  }
};
</script>