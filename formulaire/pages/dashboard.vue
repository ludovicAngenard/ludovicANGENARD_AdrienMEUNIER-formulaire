<template>
    <div>
        <v-data-table
        :headers="$store.state.dashboard.headers"
        :items="$store.state.dashboard.accounts"
        :items-per-page="5"
        class="elevation-1"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    methods:{
    remove_account() {
      this.$store.dispatch('dashboard/remove',  {  'last_name' : this.$coockies.get('lastName'), 'first_name' : this.$coockies.get('firstName'), 'email' : this.$coockies.get('email'), 'password' : this.$coockies.get('password')})
    },
    mounted() {
        this.$store.dispatch('dashboard/show_btn')
    }
  },
}
</script>
