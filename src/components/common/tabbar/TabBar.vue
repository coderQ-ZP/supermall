<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>

  // import Tab-bar-item from '../tab-bar-item/Tab-bar-item.vue'
    export default {
        name: "tabbar"

        
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    flex-direction: row;
    background-color: #f6f6f6;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow:0px 10px 20px rgba(100,100,100,.8);
  }
</style>
