import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    member: null,
    members: null,
    page: 1
  },
  getters: {
    membersList: state => {
      return state.members;
    },
    page: state => {
      return state.page;
    }
  },
  mutations: {
    storeMembers: (state, payload) => {
      state.members = payload;
    },
    updatePage: (state, payload) => {
      state.page = payload;
    },
    prevPage: (state, payload) => {
      state.page = payload - 1;
    },
    nextPage: (state, payload) => {
      state.page = payload + 1;
    }
  },
  actions: {
    storeMembers: (context, payload) => {
      context.commit('storeMembers', payload)
    },
    updatePage: (context, payload) => {
      context.commit('updatePage', payload)
    },
    prevPage: (context, payload) => {
      context.commit('prevPage', payload)
    },
    nextPage: (context, payload) => {
      context.commit('nextPage', payload)
    }
  }
})