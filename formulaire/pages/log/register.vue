<template>
  <div>

    <div class="vertical-center">
      <v-card
        class="d-flex justify-center mb-6"
        flat
        tile
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            label="Nom"
            required
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            :counter="20"
            :rules="firstNameRules"
            label="Prénom"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="20"
            :rules="passwordRules"
            label="Mot de passe"
            required
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Condition général?"
            required
          ></v-checkbox>





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
            Se connecter
            <template v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </div>

</template>

<script>
import {ACTIONS} from "../../store/users";
import {ACTIONS_MESSAGES} from "../../store/messages";

export default {
  name: 'register',
  data: () => ({

    loader : null,
    loading: false,
    users: [],
    checkbox: false,
    valid: true,
    name: '',
    firstName: '',
    password: '',
    nameRules: [
      v => !!v || 'Le nom est obligatoire',
      v => (v && v.length <= 20) || 'Le nom est trop grand, il doit faire maximum 20 caractères',
    ],
    firstNameRules: [
      v => !!v || 'Le prénom est obligatoire',
      v => (v && v.length <= 20) || 'Le prénom est trop grand, il doit faire maximum 20 caractères',
    ],
    passwordRules: [
      v => !!v || 'Un mot de passe est requis',
    ],
    email: '',
    emailRules: [
      v => !!v || 'L\'email est obligatoire',
      v => /.+@.+\..+/.test(v) || 'L\'email est dans un format incorrect',
    ],
  }),mounted() {


  },
  methods: {
    addUsers() {
      let emailExist = false
      this.$store.state.users.users.forEach(response => {
        if (response.email === this.$data.email) {
          emailExist = true
        }
      })

      if (!emailExist) {
        this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
          lastName: this.$data.name,
          firstName: this.$data.firstName,
          email: this.$data.email,
          password: this.$data.password,
        })
        this.$data.users.push({
          lastName: this.$data.name,
          firstName: this.$data.firstName,
          email: this.$data.email,
          password: this.$data.password,
        })

        localStorage.setItem('users', JSON.stringify(this.$data.users))
      }else {
        this.$store.dispatch(ACTIONS_MESSAGES.ADD_MESSAGE, 'Email incorrect')
      }
    },

    async validate () {
      if (this.$refs.form.validate()) {
        await this.addUsers()
        if (this.$store.state.messages.message.length === 0) {
          await this.$router.push('/log/connect')
        }
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)
      this.$router.push('/log/connect')
      this.loader = null
    },
  },
}
</script>

<style scoped>
.vertical-center {
  margin-top: 15%;
}

 .custom-loader {
   animation: loader 1s infinite;
   display: flex;
 }
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
