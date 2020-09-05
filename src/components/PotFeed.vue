<template>
  <div class="potWrapper"> 
    <PotBox
      v-for="(el, index) in data.pots"
      :key="index"
      :elDataObj="el"
    ></PotBox>
  </div>
</template>

<script>
import PotBox from "./PotBox";
import { mapState } from "vuex";

export default {
  name: "Jackpot",
  components: {
    PotBox
  },
  computed: {
    ...mapState({
      data: "potsData"
    })
  }
};
</script>

<style scooped>
.potWrapper {
  width: 20vh;
  height: 100vh;
  max-width: 300px;
  min-width: 150px;
  min-height: 320px;
  background: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.2em;
}
</style>
