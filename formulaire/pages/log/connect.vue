<template>
  <div>
    <v-alert v-if="message.length > 0"
      dense
      outlined
      type="error"
    >
      {{ message }}
    </v-alert>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>


          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              :counter="20"
              :rules="passwordRules"
              label="Mot de passe"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Valider
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Formulaire
        </v-btn>

        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="warning"
          @click="loader = 'loading'"
        >
          S'enregister
          <template v-slot:loader>
            <span>Loading...</span>
          </template>
        </v-btn>
      </v-container>
    </v-form>

    <div>
      {{ $store.state.users.users }}
      <ul>
        <li v-for="(user, i) in $store.state.users.users" :key="i">
          {{ user.name }}
          {{ user.firstName }}
          {{ user.email }}
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: 'connect',
  data () {
    return {

      message : '',
      loader : null,
      loading: false,

      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Un mot de passe est requis',
      ],
      email: '',
      emailRules: [
        v => !!v || 'L\'email est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'email est dans un format incorrect',
      ],
    }
  },
  methods: {

    setCookie (name, firstName, email) {
      const options = {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      }

      const cookiesList = [
        {'name' : 'name', 'value' : name, opts: options},
        {'name' : 'firstName', 'value'  : firstName, opts: options},
        {'name' : 'email', 'value'  :email, opts: options}
      ]

      this.$cookies.setAll(cookiesList)
    },

    validate () {
      if (this.$refs.form.validate()) {
        this.$store.state.users.users.forEach(response => {
          if (this.$data.email === response.email && this.$data.password === response.password) {
            this.setCookie(response.name, response.firstName, response.email)
            this.$router.push('/')
          }else {
            this.$data.message = 'Email ou mot de passe incorrect'
          }
        })
      }
    },
    reset () {
      this.$data.message = ''
      this.$refs.form.reset()
    },
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)
      this.$router.push('/log/register')
      this.loader = null
    },
  },
}
</script>
<style scoped>

</style>
