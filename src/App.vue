<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Microsoft YaHei", sans-serif;
}

#nprogress .bar {
  background: #3EAF7C !important;
}
</style>
