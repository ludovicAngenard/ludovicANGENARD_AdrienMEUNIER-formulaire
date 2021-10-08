<template>
  <v-app>
    <v-main>
      <v-container>
        <v-alert v-if="$store.state.messages.message.length > 0"
                 dense
                 outlined
                 type="error"
        >
          {{ $store.state.messages.message }}
        </v-alert>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {ACTIONS} from "../store/users";

export default {
  data () {
    return {
      users : []
    }
  },
  mounted() {

      if (localStorage.users !== undefined) {
      this.$data.users = JSON.parse(localStorage.users)
      this.$store.dispatch(ACTIONS.INIT_USER)
      this.$data.users.forEach(response => {
        this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
          lastName: response.name,
          firstName: response.firstName,
          email: response.email,
          password: response.password,
        })
      })

    }
  }
}
</script>
