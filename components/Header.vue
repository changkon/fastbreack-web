<template>
  <div class="c-header"
    v-bind:class="headerClass"
  >
    <div class="c-header__container l-inner">
      <input type="checkbox" class="c-header__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="c-header__button">
        <span class="c-header__icon"></span>
      </label>
      <div class="c-header__background"></div>
      <div class="c-header__burger">
      </div>
      <nav class="c-header__nav">
        <ul>
          <li class="c-header__logo">
            <NuxtLink to="/">fastbreack</NuxtLink>
          </li>
          <li><NuxtLink to="/stats">Stats</NuxtLink></li>
          <li><NuxtLink to="/stats">Leaders</NuxtLink></li>
          <li><NuxtLink to="/stats">Explore</NuxtLink></li>
          <li><NuxtLink to="/stats">Big Board</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  scrollY: number = 0;

  mounted() {
    if (process.browser) {
      // Get the current route
      const pathname = this.$nuxt.$router.currentRoute.path;
      if (pathname == "/") {
        window.addEventListener("scroll", this.watchScroll);
      }
    }
  }

  beforeDestroy() {
    if (process.browser) {
      const pathname = this.$nuxt.$router.currentRoute.path;
      if (pathname == "/") {
        window.removeEventListener("scroll", this.watchScroll);
      }
    }
  }

  get headerClass(): object {
    const pathname = this.$nuxt.$router.currentRoute.path;
    const isTransparent = pathname == "/" && this.scrollY <= 50;
    return {
      "c-header--transparent": isTransparent
    };
  }

  watchScroll(): void {
    window.requestAnimationFrame((timestamp: DOMHighResTimeStamp): void => {
      this.scrollY = window.scrollY;
      console.log(`ScrollY: ${this.scrollY}`);
    });
  }

}
</script>

<style style="scss">
</style>
