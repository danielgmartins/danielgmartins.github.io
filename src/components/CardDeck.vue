<template>
  <b-container class="description">
    <h2 class="title-description"> {{ data.title }} </h2>
    <b-card-group deck class="mb-3">
        <b-card class="skill-card" 
          v-for="(item, index) in data.items" 
          v-bind:key="index">
          <img class="img-fluid" :src="item.img_src"/>
          <br>
          {{ item.name }}
        </b-card>
    </b-card-group>
  </b-container>
</template>
<script>
// import Skills from '@/assets/data/skills'
export default {
  props :['data'],
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.container{
  align-content: center;
  align-items: center;
  text-align: center;
  .container {
    display: inline-flex;
  }
  // .card-columns {
    // column-count: 3;
    // column-gap: 3rem;
    // .card {
    //   margin-bottom:3rem;
    // }
  // }
  .card-deck {
    justify-content: center;
    justify-items: left;
    align-items:center;
  }
  .card {
    background: transparent;
    border-width: 1px;
    border-color: rgba(255,255,255,0.1);
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1), inset 0px 0px 7px 0px rgba(0,0,0,0.1);
  }
  .skill-card {
    min-width: 250px;
    max-width: 250px;
    // width:100%;
    margin-bottom: 1.5rem;
    .mysql {
      color:white;
    }
    img {
      max-width: 50px;
      margin-bottom: 20px;
    }
    padding:{
      top:50px;
      bottom:50px;
    }
  }
  .card:hover {
    background: none;
    border-color: rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.8);
  }
  .card.bg-dark {
    .card-body{
      background-color: #2f2f2f;
    }
  }
  font-size: 30px;
  letter-spacing: 3px;
  word-spacing: 3px;
  font-weight: 200;
  span {
    font-weight: 700;
    letter-spacing: 1px;
  }
  color: rgba(255,255,255,0.7);
}
.description{
  max-width: 1000px;
  font-size: 20px;
  letter-spacing: 1px;
  word-spacing: 1px;
  margin:auto;
  margin-bottom: 100px;
  h2 {
    font-weight: 100;
    padding:{
      // top:  50px;
      bottom: 50px;
    } 
    color: rgba(255,255,255,0.7);
  }
  p {
    text-align: left;
    color: rgba(255,255,255,0.4);
  }
  text-justify: inter-word;
}
</style>
