<template>
  <PotFeed></PotFeed>
</template>

<script>
import PotFeed from "./components/PotFeed";
// import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PotFeed
  },
  created() {
    window.setInterval(() => {
      this.callRefreshData();
    }, 30000);
    //this.callRefreshData();
  },
  methods: {
    // ...mapActions([refreshData]),
    // var amount = this.$store.state.potsData.pots[0].amount * 2;
    callRefreshData() {
      return this.$store.dispatch("refreshData", "test");
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

@media (max-height: 900px) {
  body {
    font-size: 14px;
  }
}
</style>
