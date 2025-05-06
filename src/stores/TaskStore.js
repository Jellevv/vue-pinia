import { defineStore } from 'pinia';

export const useTaskStore = defineStore('Task', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Task 1',
                isDone: false,
            },
            {
                id: 2,
                title: 'Task 2',
                isDone: false,
            },
            {
                id: 3,
                title: 'Task 3',
                isDone: true,
            },
            {
                id: 4,
                title: 'Task 4',
                isDone: false,
            },
            {
                id: 5,
                title: 'Task 5',
                isDone: false,
            },
        ]
    }),
    getters: {
        tasksValue: (state) => state.tasks.toReversed(), //getter om de waarde van de counter op te halen
        isNotDoneCount: (state) => state.tasks.filter(task => !task.isDone).length,
    },
    actions: {
        addTask(title) {
            this.tasks.push({
                id: this.tasks.length + 1,
                title: title,
                isDone: false,
            });
        },
        removeTask(task) {
            //this.tasks.splice(index, 1);
            const index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },
    }
});
