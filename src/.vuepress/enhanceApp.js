import setRouter from './enhance-files/router';
import store from './enhance-files/store';
// import axios from 'axios'

// const baseUrl = 'http://localhost:1337/tests'
// const axiosConfig = {
//   baseUrl: baseUrl,
//   headers: { 'Content-Type': 'application/json' },
//   responseType: 'json'
// }
// const axiosBase = () => {
//   const api = axios.create(axiosConfig)
//   return api
// }

export default ({ Vue, options, router, siteData, isServer }) => {
  // Vue.prototype.$http = axiosBase()

  if (!isServer) {
    Vue.component('Splide', async () => {
      const m = await import('@splidejs/vue-splide');
      return m.Splide;
    });
    Vue.component('SplideSlide', async () => {
      const m = await import('@splidejs/vue-splide');
      return m.SplideSlide;
    });
  }

  Vue.mixin({ store: store });

  setRouter(router);
};
