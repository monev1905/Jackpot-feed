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
    }, 30000);
  },
  methods: {
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

@media (max-height: 900px) {
  body {
    font-size: 14px;
  }
}
</style>
