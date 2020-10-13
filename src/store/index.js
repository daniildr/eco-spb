import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        calculator: {
            garbageType: "",
            carType: "",
            flagOfChangeNumberOfItems: false,
            numberOfItems: 1,
            totalPrice: 0
        },
    },
    getters : {},
    mutations: {
        setGarbageType(state, n){
            state.calculator.garbageType = n;
        },
        setCarType(state, n){
            state.calculator.carType = n;
        },
        setNumberOfItems(state, n){
            state.calculator.flagOfChangeNumberOfItems = true;
            state.calculator.numberOfItems = n;
        },
        setTotalPrice(state, n){
            state.calculator.totalPrice = n;
        }
    },
    actions : {}
})