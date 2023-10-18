import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'
import CourseIndex from '@/components/Course/Index'
import CourseShow from '@/components/Course/ShowCourse'
import CourseEdit from '@/components/Course/EditCourse'
import CourseCreate from '@/components/Course/CreateCourse'

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
=======
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },

    

>>>>>>> 9f64770440e12c75a220d20746433752c8161807
  ]
})
