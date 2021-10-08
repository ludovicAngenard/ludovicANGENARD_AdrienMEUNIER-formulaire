export const state = () => ({
    accounts:[
        {first_name: 'aa', last_name:'aa', email:'aaa', password: 'aaaaa'}
    ],
    headers:[
        {
            text:'Prénom',
            value: 'first_name',
            align: 'start',
            sortable: false
        },
        {
            text :'Nom',
            value: 'last_name'
        },
        {
            text: 'E-mail',
            value: 'email'
        },
        {
            text: 'Password',
            value: 'password'
        },
        {
            text: '',
            value: 'button'
        }]
})

export const mutations = {
    REMOVE_ACCOUNT: (state, data) => state.accounts.splice(state.accounts.indexOf(data), 1),
    SHOW_BTN: (state) => {
        state.accounts.forEach(element => {
            if (element.email == this.$coockies.get('email')){
                element.button = <remove-account-btn></remove-account-btn>
            }
        });
    },
}

export const actions = {
    remove({commit}, account) {
    commit('REMOVE_ACCOUNT')
        console.log(commit, account)
    },
    show_btn({commit}){
        commit('SHOW_BTN')
        console.log(commit)
    }
}