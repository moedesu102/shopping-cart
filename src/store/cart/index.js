import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './stage';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
