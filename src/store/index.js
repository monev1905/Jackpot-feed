import Vue from "vue";
import Vuex from "vuex";
import fakeData from "../../fakeData/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    potsData: fakeData
  },
  getters: {
    potAmount: () => payload => {
      var amount = payload.amount;

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
        return payload.currency + newAmount;
      } else {
        return payload.currency + payload.amount;
      }
    }
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
