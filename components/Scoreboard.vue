<template>
  <div class="c-scoreboard">
    <ul class="c-scoreboard__container" v-on:scroll="scrollHandler" ref="scrollContainer">
      <span class="c-scoreboard__nav c-scoreboard__nav--left" :class="{'c-scoreboard__nav--visible': scrollState == 'middle' || scrollState == 'right'}" @click="scroll('left')" />
      <li v-for="match in matches" :key="match.matchId" class="c-scoreboard__match">
        <div class="c-scoreboard__status">
          {{ formatStatus(match.isFinished, match.timeElapsedInMs) }}
        </div>
        <div class="c-scoreboard__team">
          <div class="c-scoreboard__name">
            {{ match.home.name }}
          </div>
          <div class="c-scoreboard__record">
            ({{match.home.wins}}-{{match.home.loss}})
          </div>
          <div class="c-scoreboard__score" :class="{'c-scoreboard__score--winner': match.isFinished && (match.home.score > match.away.score)}">
            {{match.home.score}}
          </div>
        </div>
        <div class="c-scoreboard__team">
          <div class="c-scoreboard__name">
            {{ match.away.name }}
          </div>
          <div class="c-scoreboard__record">
            ({{match.away.wins}}-{{match.away.loss}})
          </div>
          <div class="c-scoreboard__score" :class="{'c-scoreboard__score--winner': match.isFinished && (match.away.score > match.home.score)}">
            {{match.away.score}}
          </div>
        </div>
      </li>
      <span class="c-scoreboard__nav c-scoreboard__nav--right" :class="{'c-scoreboard__nav--visible': scrollState == 'middle' || scrollState == 'left'}" @click="scroll('right')" />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import Match from "@/models/Match";

@Component
export default class Scoreboard extends Vue {
  @Prop({ required: true, type: Array as () => Match[] }) matches!: Match[];
  @Ref("scrollContainer") readonly scrollContainer!: HTMLElement;
  scrollState: "none" | "left" | "middle" | "right" = "none";

  scroll(direction: "left" | "right"): void {
    const currentScrollLeft: number = this.scrollContainer?.scrollLeft;
    const increment: number = 100;
    const updatedScrollLeft: number = direction == "left" ? Math.max(0, currentScrollLeft - increment) : Math.min(this.scrollContainer?.scrollWidth, currentScrollLeft + increment);
    this.scrollContainer.scrollTo({
      top: 0,
      left: updatedScrollLeft,
      behavior: "smooth"
    })
  }

  scrollHandler(event: Event) {
    window.requestAnimationFrame((timestamp: number) => {
      this.scrollState = this.getScrollState();
    });
  }

  mounted() {
    this.scrollState = this.getScrollState();
  }

  formatStatus(isFinished: boolean, timeInMs: number): string {
    if (isFinished) {
      return "Final";
    }

    const regulationMs = 2880000;
    const quarterMs = 720000;
    const overtimeMs = 300000;

    // 48min
    if (timeInMs < regulationMs) {
      // in regulation
      // 720000 (12min)
      const remainingInQuarterMs = quarterMs - (timeInMs % quarterMs);
      const quarter = Math.floor(timeInMs / quarterMs) + 1;
      const minutes = Math.floor(remainingInQuarterMs / (60 * 1000)) % 60;
      const seconds = Math.floor(remainingInQuarterMs / 1000) % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${quarter}Q`;
    } else {
      // in overtime
      // 300000 (5min)
      const timeElapsedAfterRegulation = timeInMs - regulationMs;
      const remainingInOtMs = overtimeMs - (timeElapsedAfterRegulation % overtimeMs);
      const ot = Math.floor(timeElapsedAfterRegulation / overtimeMs) + 1;
      const minutes = Math.floor(remainingInOtMs / (60 * 1000)) % 60;
      const seconds = Math.floor(remainingInOtMs / 1000) % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} OT${ot}`
    }
  }

  getScrollState(): "none" | "left" | "middle" | "right" {
    const targetWidth: number = this.scrollContainer?.scrollWidth || 0;
    const vw: number = Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (targetWidth <= vw) {
      return "none";
    } else {
      const scrollLeft: number = this.scrollContainer?.scrollLeft;
      if (scrollLeft == 0) {
        return "left";
      } else if (scrollLeft > 0 && (scrollLeft + vw < targetWidth)) {
        return "middle";
      } else {
        return "right";
      }
    }
  }
}

</script>
