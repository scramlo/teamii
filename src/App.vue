<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue'
import { supabase } from '@/supabase'
import { useMainStore } from '@/store';
import useLogin from '@/composables/useLogin';

const isDrawerOpen = ref(false);
const showLoginDialog = ref(false);

const mainStore = useMainStore();

const email = ref('');
const { loading: loginLoading, tryLoggingIn, errorMessage: loginErrorMessage } = useLogin(email);

watchEffect(() => {
  console.debug('email', email.value);
});

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    mainStore.session = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    mainStore.session = _session
  })
});
</script>

<template>
  <v-app class="bg-gray--9">
    <v-navigation-drawer v-model="isDrawerOpen" v-if="mainStore.session">
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"
          subtitle="Logged in"></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon v-if="mainStore.session" @click="isDrawerOpen = !isDrawerOpen" />
      <v-btn v-else @click="showLoginDialog = true">
        Log In
      </v-btn>
      <v-toolbar-title>teamii</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
        <v-dialog v-model="showLoginDialog">
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-text-field class="inputField" type="email" placeholder="Your email" v-model="email" />
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" :loading="loginLoading" @click="tryLoggingIn" block>Log In</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
      <v-snackbar :timeout="5000" color="error" :modelValue="loginErrorMessage">{{ loginErrorMessage }}</v-snackbar>
    </v-main>
  </v-app>
</template>