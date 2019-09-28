import Vue from 'vue'
import VueRouter from 'vue-router'


const Home=()=>import('../views/home/Home.vue')
const Car=()=>import('../views/car/Car.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const Category=()=>import('../views/category/Category')
Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/car',
    component:Car
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router=new VueRouter({
  routes,
  mode:'history'

})

export default router
