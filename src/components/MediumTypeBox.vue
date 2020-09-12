<template>
  <div class="dropWrapper">
    <div class="starsContainer"></div>
    <div class="imgWrapper">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="jackpotTimerWrap">
      <div class="dropJackpot goldText">
        <p>{{ potAmount }}</p>
      </div>
      <div v-if="hasTimer" class="timerWrapper">
        <TimerCountdown :countdown="dropInCountdown"></TimerCountdown>
      </div>
    </div>
  </div>
</template>

<script>
import TimerCountdown from "./TimerCountdown";
//import { TweenMax } from "gsap";

export default {
  props: {
    imgSrc: String,
    potAmount: String,
    hasTimer: Boolean,
    dropInCountdown: String
  },
  name: "BigTypeBox",
  components: {
    TimerCountdown
  }
};
</script>

<style scoped>
.dropWrapper {
  position: relative;
  width: 100%;
  height: 4em;
  background-color: #0e0c22;
  border-radius: 3%;
  box-shadow: inset 0px 0px 20px -3px rgb(43, 49, 101),
    0 20px 5px rgb(43, 49, 101, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.3em;
}

.starsContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url("../assets/stars.png");
  background-size: 120% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  margin-top: -1em;
}

.timerWrapper {
  background-image: none;
  margin-left: -0.4em;
}

.imgWrapper {
  height: inherit;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  flex: 0 0 35%;
  z-index: 2;
}

.imgWrapper img {
  width: 3.5em;
}

.jackpotTimerWrap {
  flex: 0 0 65%;
  padding-left: 0.5em;
  z-index: 2;
}

.dropJackpot {
  font-size: 1em;
  display: flex;
  flex-direction: column;
}
</style>
