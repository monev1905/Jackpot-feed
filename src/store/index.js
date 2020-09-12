import Vue from "vue";
import Vuex from "vuex";
import fakeData from "../../fakeData/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    potsData: fakeData
  },
  mutations: {
    updateData: (state, payload) =>
      (state.potsData.pots[payload.potIndex].amount = payload.amount)
  },
  actions: {
    refreshData(context) {
      context.state.potsData.pots.forEach((pot, index) => {
        var currentAmount = Number(pot.amount);
        var newAmount = currentAmount + currentAmount * 0.001;
        context.commit("updateData", {
          potIndex: index,
          amount: newAmount
        });
      });
    }
  },
  modules: {}
});
