<template>
  <div class="tab-container">
    假设我们有四个tab选项，每个tab都会向后端请求数据，但我们希望一开始只会请求当前的tab数据，而且tab来回切换的时候不会重复请求，只会实例化一次。
    <br>
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" />

    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <!-- keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。 它是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。 -->
        <!-- <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive> -->

        <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import TabPane from './components/TabPane'

export default {
  name: 'Tab',
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
