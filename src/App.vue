<template>
  <PotFeed></PotFeed>
</template>

<script>
import PotFeed from "./components/PotFeed";

export default {
  name: "App",
  components: {
    PotFeed
  },
  created() {
    window.setInterval(() => {
      this.callRefreshData();
      //console.log(this.$store.state.potsData.pots[0].amount);
    }, 4000);
  },
  methods: {
    // ...mapActions([refreshData]),
    // var amount = this.$store.state.potsData.pots[0].amount * 2;
    callRefreshData() {
      return this.$store.dispatch("refreshData");
    }
  }
};
</script>

<style>
body {
  font-size: 18px;
}

*,
:after,
:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: inherit;
}

.goldText {
  background: -webkit-linear-gradient(#fef785, #ccaa35);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

@media (max-height: 900px) {
  body {
    font-size: 14px;
  }
}
</style>
