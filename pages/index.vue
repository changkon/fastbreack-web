<template>
  <div>
    <Header />
    <div class="c-splash">
      <div class="c-splash__content l-inner">
        <h1 class="title">fastbreack</h1>
        <div class="h2 c-splash__sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          convallis felis vitae justo consectetur, ac mattis leo congue. In
          tincidunt arcu metus, vel tincidunt neque viverra convallis. Mauris
          quis libero nec tortor pharetra blandit a vel velit. Curabitur metus
          arcu, efficitur gravida ultricies eget, gravida ac est.
        </div>
        <NuxtLink
          class="c-button c-button--inverse c-button--arrow u-m-top30"
          to="/stats"
          >View stats</NuxtLink
        >
      </div>
    </div>
    <Scoreboard :matches="matches" />
    <section id="intro" class="l-inner my-24">
      <h1 class="h1">Intro section</h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </section>
    <section id="inspiration" class="l-inner my-24">
      <h1 class="h1">Inspiration section</h1>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </section>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import ScreenMixin, { ScreenOrientation } from "../mixins/ScreenMixin";
import Match from "@/models/Match";

@Component({
  async asyncData(ctx: Context): Promise<object> {
    return {
      matches: [
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: false,
          timeElapsedInMs: 60000,
          home: {
            city: "Washington",
            name: "Wizards",
            score: 115,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Toronto",
            name: "Raptors",
            score: 137,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: false,
          timeElapsedInMs: 720000,
          home: {
            city: "Washington",
            name: "Wizards",
            score: 115,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Toronto",
            name: "Raptors",
            score: 137,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: false,
          timeElapsedInMs: 2881000,
          home: {
            city: "Washington",
            name: "Wizards",
            score: 115,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Toronto",
            name: "Raptors",
            score: 137,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Washington",
            name: "Wizards",
            score: 115,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Toronto",
            name: "Raptors",
            score: 137,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Dallas",
            name: "Mavericks",
            score: 118,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Atlanta",
            name: "Hawks",
            score: 117,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Minnesota",
            name: "Timberwolves",
            score: 112,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Los Angeles",
            name: "Clippers",
            score: 119,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Memphis",
            name: "Grizzlies",
            score: 130,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Charlotte",
            name: "Hornets",
            score: 114,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Brooklyn",
            name: "Nets",
            score: 104,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Indiana",
            name: "Pacers",
            score: 94,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Chicago",
            name: "Bulls",
            score: 129,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "New Orleans",
            name: "Pelicans",
            score: 116,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Denver",
            name: "Nuggets",
            score: 133,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Cleveland",
            name: "Cavaliers",
            score: 95,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 3180000,
          home: {
            city: "Los Angeles",
            name: "Lakers",
            score: 114,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Oklahoma City",
            name: "Thunder",
            score: 113,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
        {
          matchId: Math.random().toString(36),
          datetime: new Date(),
          venue: "Test venue",
          isFinished: true,
          timeElapsedInMs: 2880000,
          home: {
            city: "Phoenix",
            name: "Suns",
            score: 125,
            wins: 12,
            loss: 10,
            seeding: 4,
            conference: "east",
            division: "Atlantic",
          },
          away: {
            city: "Milwaukee",
            name: "Bucks",
            score: 124,
            wins: 15,
            loss: 6,
            seeding: 2,
            conference: "west",
            division: "Southeast",
          },
        },
      ],
    };
  },
})
export default class Index extends Vue {
  // Retrieved from asyncData
  matches!: Match[];

  mounted() {
    if (process.browser) {
      console.log("Is from Browser. Mounted");
    }
  }
}
</script>

<style style="scss">
</style>
