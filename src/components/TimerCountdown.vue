<template>
  <div class="countdownWrapper">
    <p>Must Drop In</p>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path fill="#F7F7FB" d="M64 9A55 55 0 1 0 64 119A55 55 0 1 0 64 9Z"/><path fill="#DEDFE6" d="M64,9C33.6,9,9,33.6,9,64s24.6,55,55,55s55-24.6,55-55S94.4,9,64,9z M64,105.2c-22.8,0-41.2-18.5-41.2-41.2S41.2,22.8,64,22.8s41.2,18.5,41.2,41.2S86.8,105.2,64,105.2z"/><path fill="#D8D7D5" d="M64 59.4A4.6 4.6 0 1 0 64 68.6A4.6 4.6 0 1 0 64 59.4Z"/><path fill="#464C55" d="M64,122C32,122,6,96,6,64S32,6,64,6s58,26,58,58S96,122,64,122z M64,12c-28.7,0-52,23.3-52,52s23.3,52,52,52s52-23.3,52-52S92.7,12,64,12z"/><path fill="#464C55" d="M64.1,67.1c-0.8,0-1.5-0.3-2.1-0.9s-0.9-1.3-0.9-2.1L61,36.5c0-1.7,1.3-3,3-3l0,0c1.7,0,3,1.3,3,3l0.1,24.6L82.3,61l0,0c1.6,0,3,1.3,3,3c0,1.7-1.3,3-3,3L64.1,67.1L64.1,67.1z"/><path fill="#464C55" d="M64,71.6c-4.2,0-7.6-3.4-7.6-7.6s3.4-7.6,7.6-7.6s7.6,3.4,7.6,7.6S68.2,71.6,64,71.6z M64,62.4c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6S64.9,62.4,64,62.4z"/></svg>
    </div>
    <div class="timer">{{ timeLeft }}</div>
  </div>
</template>

<script>
export default {
  props: {
    countdown: String
  },
  data() {
    return {
      time: this.getTimeInSeconds(),
      timer: null
    };
  },
  methods: {
    decrementOrAlert() {
      if (this.time > 0) {
        this.time--;
        return;
      }

      clearInterval(this.timer);
    },
    getTimeInSeconds() {
      var timeArray = this.countdown.split(":");
      var timeObj = {
        hours: timeArray[0],
        minutes: timeArray[1],
        seconds: timeArray[2]
      };

      var getTimeInSeconds =
        Number(timeObj.hours) * 3600 +
        Number(timeObj.minutes) * 60 +
        Number(timeObj.seconds);

      return getTimeInSeconds;
    }
  },
  computed: {
    timeLeft() {
      return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    hours() {
      return String(Math.floor(this.time / 3600)).padStart(2, "0");
    },
    minutes() {
      if (this.time >= 3600) {
        var hoursInSeconds = "";
        for (var i = 1; i <= 23; i++) {
          if (3600 * i < this.time) {
            hoursInSeconds = 3600 * i;
          }
        }
        var diff = this.time - hoursInSeconds;
        if (diff >= 60) {
          return String(Math.floor(diff / 60)).padStart(2, "0");
        }
        if (diff <= 60) {
          return "00";
        }
      }
      return String(Math.floor(this.time / 60)).padStart(2, "0");
    },
    seconds() {
      return String(this.time % 60).padStart(2, "0");
    }
  },
  created() {
    this.timer = setInterval(this.decrementOrAlert, 1000);
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

.icon {
  padding: 0 0.3em;
}

.icon svg {
  width: 1.5em;
  height: 1.5em;
  margin-top: -0.3em;
}
</style>
