import { PiniaUndo } from "pinia-undo";
import { defineStore, createPinia } from "pinia";

const pinia = createPinia();
pinia.use(PiniaUndo);

const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 10,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});

export { useCounterStore };
