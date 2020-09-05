import Vue from "vue";
import Vuex from "vuex";
import fakeData from "../../fakeData/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    potsData: fakeData,
    counter: 55
  },
  mutations: {
    updateData: (state, payload) => (state.potsData.pots[0].amount = payload.amount)
  },
  actions: {
    // refreshData: context => console.log(context.state.potsData.pots[0])
  },
  modules: {}
});
