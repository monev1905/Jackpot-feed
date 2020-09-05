<template>
  <div v-if="isBigType">
    <BigTypeBox :elDataObj="elDataObj"></BigTypeBox>
  </div>
  <div v-else class="dropWrapper">
    <div class="starsContainer"></div>
    <div class="imgWrapper">
      <img :src="getSrcImg" alt="" />
    </div>
    <div class="jackpotTimerWrap">
      <div class="dropJackpot goldText">
        <p>{{ potAmount }}</p>
      </div>
      <div v-if="hasTimer" class="timerWrapper">
        <TimerCountdown :countdown="elDataObj.must_drop_in"></TimerCountdown>
      </div>
    </div>
  </div>
</template>

<script>
import BigTypeBox from "./BigTypeBox";
import TimerCountdown from "./TimerCountdown";
export default {
  props: {
    elDataObj: Object
  },
  data() {
    return {};
  },
  name: "PotBox",
  components: {
    BigTypeBox,
    TimerCountdown
  },
  computed: {
    isBigType() {
      var typeIsBig = false;
      this.elDataObj.type == "big" ? (typeIsBig = true) : (typeIsBig = false);
      return typeIsBig;
    },
    hasTimer() {
      var timerExist = false;
      this.elDataObj.must_drop_in ? (timerExist = true) : (timerExist = false);
      return timerExist;
    },
    getSrcImg() {
      return require(`@/assets/${this.elDataObj.imageType}.png`);
    },
    potAmount() {
      var amount = this.elDataObj.amount;
      if (amount.length > 3) {
        amount = this.elDataObj.amount.split(".");
        var dollars = amount[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        amount[0] = dollars;
        var newAmount = amount.join(".");
        return this.elDataObj.currency + newAmount;
      } else {
        return this.elDataObj.currency + this.elDataObj.amount;
      }
    }
  }
};
</script>

<style scoped>
.dropWrapper {
  position: relative;
  width: 100%;
  margin: -0.5em 0 1em 0;
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
  background: url(/img/stars.2f1e4102.png);
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
  padding-left: 1em;
  z-index: 2;
}

.dropJackpot {
  font-size: 1em;
  display: flex;
  flex-direction: column;
}
</style>
