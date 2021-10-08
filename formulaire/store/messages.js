export const ACTIONS_MESSAGES = {
  INIT_MESSAGE: 'messages/initMessage',
  ADD_MESSAGE: 'messages/addMessage',
}

export const state = () => ({
  message: '',
})

export const mutations = {
  ADD_MESSAGE: (state, data) => state.message = data,
  INIT_MESSAGE: (state) => state.message = ''
}

export const actions = {
  initMessage({ commit }) {
    commit('INIT_MESSAGE')
  },
  addMessage({ commit }, data) {
    commit('ADD_MESSAGE',data)
    setTimeout(() => {this.dispatch(ACTIONS_MESSAGES.INIT_MESSAGE)}, 3000);
  },
}
