<template>
  <div class="potWrapper">
    <div class="dailyDrop">
      <img src="@/assets/1.png" alt="" class="dailyDropImg" />
      <DailyDropBox></DailyDropBox>
      <PrizeDrop></PrizeDrop>
      <PrizeDrop
        v-for="(img, index) in images.dropsImgSrc"
        :key="index"
        :currentSrc="img"
      ></PrizeDrop>
    </div>
  </div>
</template>

<script>
import DailyDropBox from "./DailyDrop";
import PrizeDrop from "./PrizeDrop";

export default {
  data() {
    return {
      images: {
        dropsImgSrc: [require("@/assets/2.png"), require("@/assets/3.png")]
      }
    };
  },
  name: "Jackpot",
  components: {
    DailyDropBox,
    PrizeDrop
  }
};
</script>

<style scooped>
.potWrapper {
  width: 20vh;
  height: 100vh;
  max-width: 300px;
  min-width: 150px;
  min-height: 320px;
  background: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.dailyDropImg {
  width: 120%;
  height: auto;
  margin-left: -10%;
}
</style>
