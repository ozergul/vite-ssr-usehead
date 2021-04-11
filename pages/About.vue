<template>
  <h1>{{ msg }}</h1>
  <p>The count is preserved when switching between "Home" and "About".</p>
</template>

<script>
import {useHead} from "@vueuse/head";

export default {
  async setup() {
    useHead({
      title: 'About'
    })
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
