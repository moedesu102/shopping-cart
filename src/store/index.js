import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';
import actions from './actions';
import moduleCart from './cart';
import mutations from './mutations';
import moduleProduct from './product';
import state from './stage';

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false, // auto-expand logged mutations
  filter(mutation, stateBefore, stateAfter) {
    // returns `true` if a mutation should be logged
    // `mutation` is a `{ type, payload }`
    return mutation.type !== 'aBlocklistedMutation';
  },
  actionFilter(action, state) {
    // same as `filter` but for actions
    // `action` is a `{ type, payload }`
    return action.type !== 'aBlocklistedAction';
  },
  transformer(state) {
    // transform the state before logging it.
    // for example return only a specific sub-tree
    return state.subTree;
  },
  mutationTransformer(mutation) {
    // mutations are logged in the format of `{ type, payload }`
    // we can format it any way we want.
    return mutation.type;
  },
  actionTransformer(action) {
    // Same as mutationTransformer but for actions
    return action.type;
  },
  logActions: true, // Log Actions
  logMutations: true, // Log mutations
  logger: console, // implementation of the `console` API, default `console`
});

const localStorage = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    console.log(state);
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  });
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  mutations,
  modules: {
    cart: moduleCart,
    product: moduleProduct,
  },
  plugins: [logger, localStorage],
});

// store.commit('product/increment');

export default store;
