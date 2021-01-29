<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { NuxtError } from "@nuxt/types";

@Component
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, required: true })
  readonly error!: NuxtError;
}
</script>
