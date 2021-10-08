export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  INIT_USER: 'users/initUser',
}

export const state = () => ({
  users: [],
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  INIT_USER: (state) => state.users = []
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
  initUser({ commit }, data) {
    commit('INIT_USER',)
  },
}
