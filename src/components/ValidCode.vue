<template>
  <div
      class="ValidCode disabled-select"
      @click="validCodeService.refreshCode"
      :style="`width:${width}; height:${height}`"
  >
    <span
        v-for="(item, index) in validCodeService.codeList"
        :style="validCodeService.getStyle(item)"
        :key="index"
    >
      {{ item.code }}
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ValidCodeService} from "@/common/service/ValidCodeService";

export default defineComponent({
  name: "ValidCode",
  props: {
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "40px"
    },
    length: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      validCodeService: new ValidCodeService(this)
    }
  },
  mounted() {
    this.validCodeService.refreshCode();
  }
});
</script>

<style lang="scss" scoped>
.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    display: inline-block;
  }
}
</style>