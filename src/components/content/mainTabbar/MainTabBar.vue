<template>
  <Tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../../assets/img/home.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../../../assets/img/category.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/car">
      <img slot="item-icon" src="../../../assets/img/shopcar.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/shopcar_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../../assets/img/profile.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>


  </Tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'
    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
