export const state = () => ({
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
    REMOVE_ACCOUNT: (state, current_user) => {
        console.log('ça passe là ?')
        console.log( current_user)

    },
    DISCONNECT: (state) => {

        var a=1
    }
}

export const actions = {
    
    disconnect({commit}) {
        commit('DISCONNECT')
        console.log(commit)
    },
}