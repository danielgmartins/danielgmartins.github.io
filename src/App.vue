<template>
  <div id="app">
    <top-header/>
    <router-view/>
    <p class="footer-message"> Made with <i class="fas fa-heart"></i> by Daniel Martins</p>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader' 
export default {
  name: 'App',
  components: {
    "top-header": TopHeader,
  },
}
</script>

<style lang="scss">
* {
  cursor:default;
}
body, html, #app{
  top:0px;
  margin:0px;
  min-height: 100%;
  // min-height: 100vh;
  // min-width: 100vw;
  font-family: "Roboto", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: rgb(22, 25, 27);// rgb(22, 24, 26) );
  color: #dfdfdf;

  // padding-bottom: 50px;
}
.footer-message {
  text-align:center;
  font-weight: 100;
  letter-spacing: 0.5px;
  font-size: 15px;
  color: rgba(255,255,255,0.3);
  .fa-heart {
    font-size: 13px;
    color: rgba(255,0,0,0.65);
  }
}
</style>
