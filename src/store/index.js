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
            totalPrice: 0,
            phoneNumber: "",
            clientName: "",
            userMessage: "Перезвоните мне, пожалуйста, в ближайшее время."
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
        },
        setPhoneNumber(state, n){
            state.calculator.phoneNumber = n
        },
        setClientName(state, n){
            state.calculator.clientName = n
        },
        cleanForLastForm(state){
            state.calculator.garbageType = "";
            state.calculator.carType = "";
            state.calculator.flagOfChangeNumberOfItems = false;
            state.calculator.numberOfItems = 1;
            state.calculator.totalPrice = 0;
        },
        cleanAll(state){
            this.cleanForLastForm(state);
            state.calculator.phoneNumber = "";
            state.calculator.clientName = "";
        }
    },
    actions : {}
})