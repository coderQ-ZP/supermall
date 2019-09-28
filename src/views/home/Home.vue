<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :isbanner="banner"></home-swiper>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeMultidata} from "network/home";
  import HomeSwiper from './childComps/HomeSwiper'
  export default {
        name: "Home",
        data(){
          return {
            banner:[],
            recommend:[]
          }
        },
      components:{
          NavBar,
          HomeSwiper
      },
    created() {
          //1.请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banner=res.data.data.banner;
        this.recommend=res.data.data.recommend;
        console.log("this.banner",this.banner)
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color:var(--color-tint);
  color: white;
}
</style>
