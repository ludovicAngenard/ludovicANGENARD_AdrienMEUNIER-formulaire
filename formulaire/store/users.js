export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
}

export const state = () => ({
  users: [],
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
}
