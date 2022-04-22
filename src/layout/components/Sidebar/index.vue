// 侧边栏:本项目里的侧边栏是根据 router.js 配置的路由并且根据权限动态生成的，这样就省去了写一遍路由还要再手动写侧边栏这种麻烦事，同是使用了递归组件，这样不管你路由多少级嵌套，都能愉快的显示了。权限验证那里也做了递归的处理
<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 侧边栏高亮问题：将default-active一直指向当前路由 -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- 遍历之前算出来的permission_routers，通过vuex拿到之后动态v-for渲染而已 -->
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo }, // $vm0.$options.components
  computed: { // $vm0.$options.computed
    // src\store\getters.js
    ...mapGetters([
      'permission_routes', // $vm0.permission_routes
      'sidebar' // $vm0.sidebar
    ]),
    activeMenu() { // $vm0.activeMenu
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() { // $vm0.showLogo
      return this.$store.state.settings.sidebarLogo
    },
    variables() { // $vm0.variables
      return variables
    },
    isCollapse() { // $vm0.isCollapse
      return !this.sidebar.opened
    }
  }
}
</script>
