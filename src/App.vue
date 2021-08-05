<template>
  <div class="phrase-app">
    <router-view/>
  </div>
  
</template>

<script>

export default {

}
</script>

<style>
  .phrase-app {
    @apply grid justify-center min-w-max p-10;
    @apply bg-gradient-to-t from-white to-blue-500;
  }
  .phrase-app h1 {
    @apply text-5xl pointer-events-none;
  }
</style>