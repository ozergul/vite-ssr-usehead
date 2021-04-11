<template>
  <h1>Home</h1>
  <p>This content is rendered to HTML.</p>
</template>

<script setup>
import {useHead} from "@vueuse/head";

useHead({
  title: 'Home'
})
</script>
<style scoped>
h1 {
  color: green;
}
</style>
