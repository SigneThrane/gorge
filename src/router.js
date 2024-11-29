import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import CreateAbout from './components/CreateAbout.vue'
import CreateAccount from './components/CreateAccount.vue'
import MediaPost from './components/MediaPost.vue'
import FollowingPage from './components/FollowingPage.vue'
import ProfileMedia from './components/ProfileMedia.vue'
import ProfileSetting from './components/ProfileSetting.vue'
import TrendingPage from './components/TrendingPage.vue'
import UploadPost from './components/UploadPost.vue'
import MyProfile from './components/MyProfile.vue'
import Notification from './components/Notification.vue'
import Search from './components/Search.vue'



export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/CreateAbout',
      name: 'CreateAbout',
      component: CreateAbout
    },
    {
      path: '/MediaPost/:id',  // Add dynamic segment to capture the post ID
      name: 'MediaPost',
      component: MediaPost
    },
    {
      path: '/FollowingPage',
      name: 'FollowingPage',
      component: FollowingPage
    },
    {
      path: '/ProfileMedia',
      name: 'ProfileMedia',
      component: ProfileMedia
    },
    {
      path: '/ProfileSetting',
      name: 'ProfileSetting',
      component: ProfileSetting
    },
    {
      path: '/TrendingPage',
      name: 'TrendingPage',
      component: TrendingPage
    },
    {
      path: '/UploadPost',
      name: 'UploadPost',
      component: UploadPost
    },
    {
      path: '/MyProfile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },

  ]
})
