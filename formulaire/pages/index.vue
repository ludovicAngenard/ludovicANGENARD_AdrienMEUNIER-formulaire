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
  </div>
</template>
