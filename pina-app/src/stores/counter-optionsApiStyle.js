//Options api style 

import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  //state 
  state: () => {
    //return state:inital state 
    return {
      count: 10
    }
  },
  //actions: biz logic: state mutation :reactive state 
  actions: {
    //methods
    increment() {
      return this.count++
    }
  },
  //getters: Computed Propeties
  getters: {
    value: state => state.count,
    doubleIt: state => state.count * 2
  }


});