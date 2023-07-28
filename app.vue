<script lang="ts">
import { CounterDisplay } from ".nuxt/components";
</script>
<template>
  <div>
    <ClientOnly>
      <CounterDisplay /><br />
      <IncrementButton />
      <UndoButton />
    </ClientOnly>
  </div>
</template>
