import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import CarIndex from '@/components/Car/Index'
import CarEdit from '@/components/Car/EditCar'
import CarShow from '@/components/Car/ShowCar'
import CarCreate from '@/components/Car/CreateCar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
////////////////////////////Car/////////////////////////////
{
  path: '/car/create',
  name: 'car-create',
  component: CarCreate
},
{
  path: '/car/edit/:carId',
  name: 'car-edit',
  component: CarEdit
},
{
  path: '/car/:carId',
  name: 'car',
  component: CarShow
},
{
  path: '/cars',
  name: 'cars',
  component: CarIndex
}
  ]
})
