<template>
  <main>
    <pre>{{ data }}</pre>
  </main>
</template>

<script lang="ts" setup>
const { data } = await useAsyncGql('todos');
</script>
