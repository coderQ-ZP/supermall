<template>
    <swiper>
      <swiper-item v-for="item in banbers">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
    export default {
        name: "HomeSwiper",
        props:["isbanner"],
        components:{
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>

</style>
