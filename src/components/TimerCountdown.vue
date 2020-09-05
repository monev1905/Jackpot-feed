<template>
  <div class="countdownWrapper">
    <p>Must Drop In</p>
    <div class="icon">X</div>
    <div class="timer">{{ countdown }}</div>
  </div>
</template>

<script>
export default {
  props: {
    countdown: String
  }
};
</script>

<style scoped>
.countdownWrapper {
  display: flex;
  padding: 5px 10px 5px 10px;
  background: #000000;
  border-radius: 25%;
  height: 1em;
  width: fit-content;
}

.countdownWrapper {
  color: #fff;
  justify-content: center;
}

.countdownWrapper p,
.countdownWrapper .icon,
.countdownWrapper .timer {
  font-size: 0.42em;
}
</style>
