<template>
  <button @click="undo">Undo</button>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/main";

const counterStore = useCounterStore();

const undo = () => {
  counterStore.undo();
};
</script>
