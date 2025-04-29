import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        counterValue: (state) => state.counter, //getter om de waarde van de counter op te halen
        isEven: (state) => state.counter % 2 === 0, //als het getal deelbaar is door 2 dan is het even
    },
    actions: {
        increaseValue() {
            this.counter++;
        },
        decreaseValue() {
            this.counter--;
        },
    },
});
