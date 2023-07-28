<template>Counter: {{ count }}</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/main";

const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
</script>
