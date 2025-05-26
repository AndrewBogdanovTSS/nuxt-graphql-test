<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncGql('blogPosts');
</script>
