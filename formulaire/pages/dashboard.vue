
<template>
    <div>
      <v-card>
        <p>
          last name : {{  $cookies.get('lastName') }}
        </p>
        <p>
          first name : {{  $cookies.get('firstName') }}
        </p>
        <p>
          email : {{  $cookies.get('email') }}
        </p>
        <v-btn @click="unsubscribe" >
          Se désinscrire
        </v-btn>
        <v-btn @click="disconnect">
          Se déconnecter
        </v-btn>
      </v-card>
    </div>
</template>

<script>
import {ACTIONS} from "../store/users";
export default {
    methods:{
      unsubscribe() {
        this.$store.dispatch(ACTIONS.DELETE_USER, this.$cookies.get('email'))
      },
      disconnect(){
        this.$cookies.removeAll()
        this.$router.push('/log/connect')
      }
    },
}
</script>
