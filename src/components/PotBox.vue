<template>
  <div
    class="potBox"
    :class="[
      isBigType ? 'bigTypeBox' : 'mediumTypeBox',
      !ifTimerExist ? 'timerOff' : ''
    ]"
  >
    <div class="boxContainer" :class="[currentClassBoxType]">
      <div v-if="!isBigType" class="starsContainer"></div>
      <div class="imgWrapper">
        <img :src="getSrcImg" alt="" />
      </div>
      <div class="amountWrapper">
        <div class="boxMoney">
          <p class="goldText">{{ getPotAmount }}</p>
          <img v-if="isBigType" src="@/assets/box.png" />
        </div>
        <div class="timerBox" v-if="ifTimerExist">
          <TimerCountdown :countdown="elDataObj.must_drop_in"></TimerCountdown>
        </div>
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
  name: "BigTypeBox",
  components: {
    TimerCountdown
  },
  computed: {
    potAmount() {
      return Number(this.elDataObj.amount);
    },
    getSrcImg() {
      return require(`@/assets/${this.elDataObj.imageType}.png`);
    },
    ifTimerExist() {
      if (this.elDataObj.must_drop_in) {
        return true;
      } else {
        return false;
      }
    },

    isBigType() {
      if (this.elDataObj.type == "big") {
        return true;
      } else {
        return false;
      }
    },
    getPotAmount() {
      return this.potAmountValidation(this.potAmount);
    },
    currentClassBoxType() {
      if (this.elDataObj.type == "big") {
        return "BigBox";
      } else {
        return "MediumBox";
      }
    }
  },
  methods: {
    potAmountValidation(currentAmount) {
      var amount = currentAmount.toFixed(2);

      if (amount.length > 3) {
        var amountArr = amount.split(".");
        var dollars = amountArr[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        amountArr[0] = dollars;
        var newAmount = amountArr.join(".");

        return this.elDataObj.currency + newAmount;
      } else {
        return this.elDataObj.currency + this.elDataObj.amount;
      }
    }
  },
  watch: {
    potAmount(newAmount, oldAmount) {
      newAmount = newAmount.toFixed(2);
      oldAmount = oldAmount.toFixed(2);
      var el = this.$el.getElementsByClassName("goldText")[0];
      var obj = { value: oldAmount, vueInstance: this };
      TweenMax.to(obj, 2, {
        value: newAmount,
        onUpdate: function() {
          var currentAmount = obj.vueInstance.potAmountValidation(obj.value);
          el.innerHTML = currentAmount;
        }
      });
    }
  }
};
</script>

<style scoped>
.potBox {
  margin: -0.5em 0 1em 0;
}

.potBox.bigTypeBox.timerOff:not(:last-child) {
  margin-bottom: 2.5em;
}

.boxContainer {
  position: relative;
  width: 100%;
  border-radius: 2%;
  box-shadow: inset 0px 0px 20px -3px rgb(43, 49, 101),
    0 20px 5px rgb(43, 49, 101, 0.3);
  display: flex;
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

.boxContainer.boxContainer.MediumBox {
  height: 4em;
  align-items: center;
  justify-content: space-around;
  padding: 0.3em;
}

.boxContainer.BigBox {
  flex-direction: column;
}

.boxContainer.MediumBox {
  flex-direction: row;
}

.imgWrapper {
  height: inherit;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  flex: 0 0 35%;
}

.boxContainer.MediumBox .imgWrapper {
  z-index: 2;
}

.boxContainer.BigBox .imgWrapper img {
  width: 100%;
  height: 100%;
}

.boxContainer.MediumBox .imgWrapper img {
  width: 3.5em;
}

.amountWrapper {
  position: relative;
}

.boxContainer.MediumBox .amountWrapper {
  flex: 0 0 65%;
  padding-left: 0.5em;
  z-index: 2;
}

.boxContainer.BigBox .amountWrapper {
  margin-top: -1em;
}

.boxMoney {
  height: 2em;
}

.boxContainer.MediumBox .boxMoney {
  display: flex;
}

.boxMoney img {
  position: absolute;
  background-size: 100% 100%;
  width: 100%;
  height: inherit;
  z-index: 1;
  top: 0;
  left: 0;
}

.goldText {
  background: -webkit-linear-gradient(#fef785, #ccaa35);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: sans-serif;
}

.boxContainer .amountWrapper .boxMoney p {
  height: inherit;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxContainer.BigBox .amountWrapper .boxMoney p {
  font-size: 1.5em;
  text-align: center;
}

.boxContainer.BigBox .amountWrapper .timerBox {
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.boxContainer.boxContainer.MediumBox .timerBox {
  margin-left: -0.55em;
  width: 100%;
  margin-top: -0.35em;
}
</style>
