<script setup lang="ts">
import { useMainStore } from '@/store';
import Account from './Account.vue'

const { session } = useMainStore();

</script>
<template>
  <Account v-if="session" :session="session" />
  <template v-else>
    <h1>Welcome to teamii, Stranger</h1>
  </template>
</template>