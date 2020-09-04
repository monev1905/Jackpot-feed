<template>
  <div v-if="!currentSrc" class="timerWrapper">
    <p>Must Drop In</p>
    <div class="icon">X</div>
    <div class="timer">02:22:12</div>
  </div>
  <div v-else class="dropWrapper">
    <div class="imgWrapper">
      <img :src="currentSrc" alt="">
    </div>
    <div class="dropPrice goldText">
      $12,34,68
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentSrc: String
  },
  data() {
    return {};
  },
  name: "PrizeDrop"
};
</script>

<style scoped>
.dropWrapper,
.timerWrapper {
  width: 100%;
  margin: -0.5em 0 1em 0;
  height: 4em;
  background-color: #0e0c22;
  border-radius: 3%;
  box-shadow: inset 0px 0px 35px -3px rgb(43, 49, 101),
    0 20px 5px rgb(43, 49, 101, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.timerWrapper {
  color: #fff;
  justify-content: center;
}

.timerWrapper p,
.timerWrapper .icon,
.timerWrapper .timer {
  font-size: 0.7em;
}

.imgWrapper {
  height: inherit;
  display: flex;
  align-items: center;
}

.imgWrapper img {
  width: 3.5em;
}

.dropPrice {
  font-size: 1.1em;
}
</style>
