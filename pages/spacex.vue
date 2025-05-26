<template>
  <main>
    <button @click="refresh()">Refresh</button>

    <p v-if="pending">pending</p>
    <pre v-else>
      {{ data || error }}
   </pre
    >
  </main>
</template>

<script lang="ts" setup>
const { data, error, pending, refresh } = await useAsyncGql({
  operation: 'ships',
  variables: { limit: 15 },
  options: {
    transform: ({ ships }) => ships.map(({ name }) => name),
  },
});

if (error.value) {
  // eslint-disable-next-line no-console
  console.error(error.value);
}
</script>
