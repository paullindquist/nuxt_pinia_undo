<template>
  <button @click="increment">Increment</button>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/main";

const counterStore = useCounterStore();

const increment = () => {
  counterStore.increment();
};
</script>
