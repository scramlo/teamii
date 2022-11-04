import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })

export default router;