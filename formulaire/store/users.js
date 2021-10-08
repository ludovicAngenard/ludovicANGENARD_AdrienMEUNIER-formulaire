export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  INIT_USER: 'users/initUser',
  DELETE_USER: 'users/deleteUser',
}

export const state = () => ({
  users: [],
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  DELETE_USER: (state, email) => {
    console.log(email)
    let indexs = 0
    state.users.findIndex((element, index) => {
      if (element.email === email) {
        indexs = index
      }
    })
    state.users.splice(indexs,1)
    localStorage.setItem('users', JSON.stringify(state.users))
  }
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
  deleteUser({ commit }, data) {
    commit('DELETE_USER',data)
    this.$cookies.removeAll()
  },
  deleteUser({ commit }, data) {
    commit('DELETE_USER',data)
  },

}
