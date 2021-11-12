import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        SET_CART: (state, product) => {
            let isProductExists = false;

            if (state.cart.length) {
                state.cart.map(function (item) {
                    if (item.imgURL === product.imgURL) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE', index)
        }
    },
    getters: {
        CART(state) {
            return state.cart;
        }
    }

});

export default store;


