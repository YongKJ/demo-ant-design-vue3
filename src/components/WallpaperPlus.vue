<template>
  <div class="main" :style="wallpaperPlusService.getBgImgStyle(bgImg)">
    <happy-scroll
        resize
        size="6"
        ref="scroll"
        :style="wallpaperPlusService.getScrollbarHeightStyle()"
        :color="'rgba(' + color + ',0.3)'"
    >
      <div :style="wallpaperPlusService.getMainWidthStyle()">
        <div id="content-details" style="position: relative; margin: 0 auto">
          <Particles
              id="tsparticles"
              :particlesInit="wallpaperPlusService.particlesInit"
              :options="wallpaperPlusService.getParticlesConfig()"
              :particlesLoaded="wallpaperPlusService.particlesLoaded"
          />
          <slot></slot>
        </div>
      </div>
    </happy-scroll>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {WallpaperPlusService} from "@/common/service/WallpaperPlusService";
import {WallpaperImage} from "@/common/pojo/po/WallpaperImage";

export default defineComponent({
  name: "WallpaperPlus",
  props: {
    bgImg: {
      type: String,
      default: WallpaperImage.BACKGROUND
    },
    color: {
      type: String,
      default: "152,118,170"
    }
  },
  data() {
    return {
      wallpaperPlusService: new WallpaperPlusService(this)
    }
  },
  mounted() {
    this.wallpaperPlusService.initData();
  }
});
</script>

<style scoped>
.main {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  scroll-bar-width: none;
  position: fixed;
  transition: unset;
  overflow: scroll;
  height: 100%;
  width: 100%;
  inset: 0;
}

.main::-webkit-scrollbar {
  display: none;
}
</style>