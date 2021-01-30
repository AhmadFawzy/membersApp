import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Member from './views/Member.vue'

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/member/:id', component: Member },
  ]
})