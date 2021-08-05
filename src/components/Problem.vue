<template>
  <div class="problem">
    <div class="top"><span id="top">23</span></div>
    <div class="top"><span id="operator">+</span><span id="bottom">34</span></div>
    <div><input type="text" maxlength="5"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .problem {
        @apply grid justify-center;
    }
     .top {
        @apply flex justify-end;
    } 
    .problem input {
        @apply rounded-b border-t-4 border-black p-4 bg-gray-50 text-lg text-right focus:outline-none;
    }
</style>