<template>
  <div class="layout">
    <Layout>
      <Sider class="menu-container" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div class="logo-container">
          <!-- <img src="../../assets/img/gitlogo.png"> -->
        </div>
        <div style="font-size:15px; color:#fff; line-height:50px; text-indent:25px">
          VUE
        </div>
        <the-menu :is-collapsed="isCollapsed" />
      </Sider>
      <!--右侧-->
      <Layout>
        <!--header-->
        <the-header />
        <Content class="main-container">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import TheHeader from './Components/TheHeader';
  import TheMenu from './Components/TheMenu';

  export default {
    components: {TheHeader, TheMenu},
    data() {
      return {
        isCollapsed: false
      }
    },
    created() {}
  }
</script>
<style scoped>
.menu-container {
  min-height: 100vh;
  left: 0;
  overflow: auto;
  background: rgb(37, 43, 56);
  position: fixed
}
.main-container {
  background: #f5f5f5;
  padding-left: 200px;
  min-height: 100vh;
  padding-top: 50px;
}
.logo-container {
  height: 50px;
  position: relative;
  background: #202531
}

</style>
