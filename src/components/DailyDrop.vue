<template>
  <div class="boxWrapper">
    <div class="boxMoney goldText">13,45,56</div>
    <img src="@/assets/box.png" alt="" class="boxImg" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "DailyDropBox"
};
</script>

<style scoped>
.boxWrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1em;
  height: 3em;
}
.boxImg {
  position: absolute;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}
.boxMoney {
  position: relative;
  z-index: 2;
  font-size: 2.4em;
}
</style>
