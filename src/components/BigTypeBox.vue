<template>
  <div>
    <div class="dailyDrop">
      <img :src="getSrcImg" alt="" class="dailyDropImg" />
    </div>
    <div class="boxWrapper">
      <div class="boxMoney">
        <p class="goldText">{{ getPotAmount }}</p>
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
import { TweenMax } from "gsap";

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
    getPotAmount() {
      return this.$store.getters.potAmount(this.elDataObj);
    },
    triggerAnimation() {
      return this.$store.state.potsData.pots[0].amount;
    }
  },
  watch: {
    triggerAnimation(newAmount, oldAmount) {
      var el = document.getElementsByClassName("goldText")[0];
      var obj = { value: oldAmount, propsData: this.elDataObj };
      TweenMax.to(obj, 2, {
        value: newAmount,
        onUpdate: function() {
          var unvalidateAmount = obj.value.toFixed(2);

          var amount = "";
          if (unvalidateAmount.length > 3) {
            var amountArr = unvalidateAmount.split(".");
            var dollars = amountArr[0].replace(
              /(\d)(?=(\d\d\d)+(?!\d))/g,
              "$1,"
            );
            amountArr[0] = dollars;
            var validatedAmount = amountArr.join(".");
            amount = obj.propsData.currency + validatedAmount;
          } else {
            amount = obj.propsData.currency + obj.propsData.amount;
          }
          el.innerHTML = amount;
        }
      });
    }
  }
};
</script>

<style scoped>
.dailyDrop {
  overflow: hidden;
}

.dailyDropImg {
  width: 100%;
  height: 100%;
}

.boxWrapper {
  position: relative;
  margin-top: -1em;
}

.boxMoney {
  overflow: hidden;
}

.boxMoney img {
  position: absolute;
  background-size: 100% 100%;
  width: 100%;
  height: 42%;
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
