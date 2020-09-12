<template>
  <div
    class="potBox"
    :class="[
      isBigType ? 'bigTypeBox' : 'mediumTypeBox',
      !ifTimerExist ? 'timerOff' : ''
    ]"
  >
    <BigTypeBox
      v-if="isBigType"
      :imgSrc="getSrcImg"
      :potAmount="getPotAmount"
      :hasTimer="ifTimerExist"
      :dropInCountdown="elDataObj.must_drop_in"
    ></BigTypeBox>
    <MediumTypeBox
      v-else
      :imgSrc="getSrcImg"
      :potAmount="getPotAmount"
      :hasTimer="ifTimerExist"
      :dropInCountdown="elDataObj.must_drop_in"
    ></MediumTypeBox>
  </div>
</template>

<script>
import BigTypeBox from "./BigTypeBox";
import MediumTypeBox from "./MediumTypeBox";
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
    MediumTypeBox
  },
  computed: {
    typeOfBox() {
      return this.isBigType ? "BigTypeBox" : "MediumTypeBox";
    },
    isBigType() {
      if (this.elDataObj.type == "big") {
        return true;
      } else {
        return false;
      }
    },
    getPotAmount() {
      var amount = this.elDataObj.amount;

      if (amount !== Number) {
        amount = Number(amount);
        amount = amount.toFixed(2);
      }

      if (amount !== String) {
        amount = String(amount);
      }

      if (amount.length > 3) {
        var amountArr = amount.split(".");
        var dollars = amountArr[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        amountArr[0] = dollars;
        var newAmount = amountArr.join(".");
        return this.elDataObj.currency + newAmount;
      } else {
        return this.elDataObj.currency + this.elDataObj.amount;
      }
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
</style>
