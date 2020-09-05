<template>
  <div>
    <div class="dailyDrop">
      <img :src="getSrcImg" alt="" class="dailyDropImg" />
    </div>
    <div class="boxWrapper">
      <div class="boxMoney">
        <p class="goldText">{{potAmount}}</p>
        <img src="@/assets/box.png" alt="" />
      </div>
      <div class="timerBox">
        <TimerCountdown :countdown="elDataObj.must_drop_in"></TimerCountdown>
      </div>
    </div>
  </div>
</template>

<script>
import TimerCountdown from "./TimerCountdown";

export default {
  props: {
    elDataObj: Object
  },
  data() {
    return {};
  },
  name: "BigTypeBox",
  components: {
    TimerCountdown
  },
  computed: {
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
.dailyDrop {
  overflow: hidden;
}

.dailyDropImg {
  width: 120%;
  height: auto;
  margin-left: -10%;
}

.boxWrapper {
  position: relative;
  margin-top: -1em;
}

.boxMoney img {
  position: absolute;
  background-size: 100% 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  margin-top: -0.2em;
}

.boxMoney p {
  position: relative;
  z-index: 2;
  font-size: 1.6em;
  text-align: center;
}

.timerBox {
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
}
</style>
