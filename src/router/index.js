import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import TabsView from '@/view/ui/TabsView'
import PageView from '@/view/ui/PageView'

import HomeView from '@/view/HomeView'
import EventView from '@/view/EventView'
import TimelineView from '@/view/TimelineView'
import ArchiveView from '@/view/ArchiveView'
import MyView from '@/view/MyView'

import Attendance from '@/view/attendance/today'
import AttendanceMonth from '@/view/attendance/month'
import Video from '@/view/home/video'
import Bus from '@/view/home/bus'

import User from '@/view/user/detail'
import UserEvent from '@/view/user/event'

import Article from '@/view/article/detail'
import ArticleGroup from '@/view/article/group'

import MyFlower from '@/view/my/flower'
import MyLevel from '@/view/my/level'
import MyPayment from '@/view/my/payment'
import MyShuttle from '@/view/my/shuttle'
import MyScane from '@/view/my/scane'
import MyFamily from '@/view/my/family'
import MyCards from '@/view/my/cards'
import MySetting from '@/view/my/setting'

import MallView from '@/view/MallView'

const RegisterView = resolve => require(['@/view/RegisterView.vue'], resolve)
const LoginView = resolve => require(['@/view/LoginView.vue'], resolve)
const NotFound = {
  template: `<div>404</div>`
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'app'
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/register',
      meta: { auth: false },
      component: RegisterView
    },
    {
      path: '/app',
      component: TabsView,
      children: [
        {
          path: '',
          redirect: '/app/home'
        },
        {
          path: 'home',
          meta: { auth: false },
          component: HomeView
        },
        {
          path: 'event',
          meta: { auth: false },
          component: EventView
        },
        {
          path: 'timeline',
          meta: { auth: false },
          component: TimelineView
        },
        {
          path: 'archive',
          meta: { auth: false },
          component: ArchiveView
        },
        {
          path: 'my',
          meta: { auth: true },
          component: MyView
        }
      ]
    },
    {
      path: '/attendance',
      component: PageView,
      children: [
        {
          path: 'today',
          meta: { auth: true },
          component: Attendance
        },
        {
          path: 'month',
          meta: { auth: true },
          component: AttendanceMonth
        }
      ]
    },
    {
      path: '/home',
      component: PageView,
      children: [
        {
          path: 'video',
          meta: { auth: false },
          component: Video
        },
        {
          path: 'bus',
          meta: { auth: false },
          component: Bus
        }
      ]
    },
    {
      path: '/user',
      component: PageView,
      children: [
        {
          path: 'event/:id',
          meta: { auth: false },
          component: UserEvent
        },
        {
          path: ':id',
          meta: { auth: false },
          component: User
        }
      ]
    },
    {
      path: '/article',
      component: PageView,
      children: [
        {
          path: 'tag/:id',
          meta: { auth: false },
          component: ArticleGroup
        },
        {
          path: ':id',
          meta: { auth: false },
          component: Article
        }
      ]
    },
    {
      path: '/my',
      component: PageView,
      children: [
        {
          path: 'flower',
          component: MyFlower
        },
        {
          path: 'level',
          component: MyLevel
        },
        {
          path: 'payment',
          component: MyPayment
        },
        {
          path: 'shuttle',
          component: MyShuttle
        },
        {
          path: 'scane',
          component: MyScane
        },
        {
          path: 'family',
          component: MyFamily
        },
        {
          path: 'cards',
          component: MyCards
        },
        {
          path: 'setting',
          component: MySetting
        }
      ]
    },
    {
      path: '/mall',
      component: PageView,
      children: [
        {
          path: '',
          redirect: '/mall/index'
        },
        {
          path: 'index',
          meta: { auth: true },
          component: MallView
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state.user.id)
  if (isLogin && (path === '/register' || path === '/login')) {
    return next({ path: '/app/my' })
  }
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

export default router
