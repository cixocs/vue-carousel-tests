import Vue from 'vue';
import Vuex from 'vuex';
import carouselData from '../../data/carousel.json';

Vue.use(Vuex);

const shuffleData = carouselData.sort(() => 0.5 - Math.random());

const state = {
  currentLang: 'jp',
  carouselData: shuffleData
};

const modules = {};

const mutations = {
  changeLang(state, lang) {
    state.currentLang = lang;
  }
};

const actions = {
  changeLang({ commit }, path) {
    const lang = path === '/en/' ? 'en' : 'jp';
    commit('changeLang', lang);
  }
};

const store = new Vuex.Store({ state, modules, mutations, actions });

export default store;
