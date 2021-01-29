<template>
  <div>
    stats!
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  mounted() {
    console.log('Stats page');
  }
}
</script>

<style style="scss">
</style>
