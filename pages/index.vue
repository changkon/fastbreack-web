<template>
  <div>
    <Header />
    <div class="c-splash">
      <div class="c-splash__content l-inner">
        <h1 class="title">
          fastbreack
        </h1>
        <div class="h2 c-splash__sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis felis vitae justo consectetur, ac mattis leo congue. In tincidunt arcu metus, vel tincidunt neque viverra convallis. Mauris quis libero nec tortor pharetra blandit a vel velit. Curabitur metus arcu, efficitur gravida ultricies eget, gravida ac est.
        </div>
        <NuxtLink class="c-button c-button--inverse c-button--arrow u-m-top30" to="/stats">View stats</NuxtLink>
      </div>
    </div>
    <section id="intro" class="l-inner">
      <h1 class="h1">Test section</h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import ScreenMixin, { ScreenOrientation } from "../mixins/ScreenMixin";

@Component
export default class Index extends Vue {

  mounted() {
    if (process.browser) {
      console.log("Is from Browser. Mounted");
    }
  }


}
</script>

<style style="scss">
</style>
