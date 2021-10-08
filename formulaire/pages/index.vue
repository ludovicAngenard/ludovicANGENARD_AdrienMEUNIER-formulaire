<template>
  <div>
    {{ $store.state.users.users }}
    <ul>
      <li v-for="(user, i) in $store.state.users.users" :key="i">
        {{ user.name }}
        {{ user.firstName }}
        {{ user.email }}
      </li>
    </ul>
    <v-btn @click="go_to_board">
    </v-btn>
  </div>
</template>

<script>
export default {
    methods:{
      go_to_board(){
        this.$router.push('/dashboard')
      }
    },
}
</script>