import { Vue, Component } from "vue-property-decorator";

type ScreenOrientation = "tab-port" | "tab-land" | "small-desktop" | "big-desktop" | "default";
export { ScreenOrientation };

@Component
export default class ScreenMixin extends Vue {
  // Custom method
  screenDimensionsToOrientation(screenX: number, screenY: number): ScreenOrientation {
    let orientation: ScreenOrientation = "default";

    if (screenX >= 600) {
      orientation = "tab-port";
    }
    if (screenX >= 900) {
      orientation = "tab-land";
    }
    if (screenX >= 1450) {
      orientation = "small-desktop";
    }
    if (screenX >= 1800) {
      orientation = "big-desktop";
    }

    return orientation;
  }
}
