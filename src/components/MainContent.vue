<template>
  <b-container fluid id="hello">
    <b-container class="banner">
      <p class="title">
        DANIEL <span>MARTINS</span>
      </p>
      <p class="subtitle">
        Computer Science Student
      </p>
    </b-container>

    <b-container fluid class="separation">
      <hr style="border-color: rgba(255,255,255,0.05); max-width: 200px">
      <!-- <i class="fas fa-chevron-down"></i> -->
    </b-container>

    <!-- <b-container class="description">
      <h2> About Me </h2>
      <p>
      My name is Daniel Martins and I'm a Computer Science student at University of Minho. I am currently looking for a job in <b>frontend</b> of <b>fullstack</b> development.
      </p>
    </b-container> -->


    <b-container class="description">
      <h2 class="title-description"> Languages </h2>
      <b-card-group deck class="mb-3">
          <b-card class="skill-card" >
            <img class="img-fluid" src="../assets/images/C.png"/>
            <br>
            C
          </b-card>
          <b-card class="skill-card" >
            <img class="img-fluid" src="../assets/images/java.png"/>
            <br>
            Java
          </b-card>
          <b-card class="skill-card" >
            <img class="img-fluid" src="../assets/images/python.png"/>
            <br>
            Python
          </b-card>
          <b-card class="skill-card" >
            <img class="img-fluid" src="../assets/images/javascript.png"/>
            <br>
            Javascript
          </b-card>
      </b-card-group>
    </b-container>
    <b-container class="description">
      <h2> Tools and Frameworks </h2>
      <b-card-group deck class="mb-3">
          <b-card class="skill-card">
            <img class="img-fluid" src="../assets/images/django.png"/>
            <br>
            Django
          </b-card>
          <b-card class="skill-card" >
            <img class="img-fluid" src="../assets/images/vuejs.png"/>
            <br>
            Vue.js
          </b-card>
          <b-card class="skill-card">
            <img class="img-fluid" src="../assets/images/git.png"/>
            <br>
            Git
          </b-card>
          <b-card class="skill-card">
            <img class="img-fluid" src="../assets/images/mysql.png"/>
            <br>
            MySQL
          </b-card>
          <b-card class="skill-card">
            <img class="img-fluid" src="../assets/images/mongodb.png"/>
            <br>
            MongoDB
          </b-card>
          <b-card class="skill-card">
            <img class="img-fluid" src="../assets/images/neo4j.png"/>
            <br>
            Neo4j
          </b-card>
      </b-card-group>
    </b-container>

    <b-container class="description">
      <h2> Contact Me At </h2>
      <a href="mailto:danielgcmartins@gmail.com"><h5>danielgcmartins@gmail.com</h5></a>
    </b-container>

  
  </b-container>
  
</template>

<script>
import Skills from '@/../src/assets/data/skills.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      skills: Skills,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hello {
  margin :{
    // top: 50px;
    bottom: 50px;
  }
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
  .separation {
    width :100%;
    margin :{
      top: 15vh;
      bottom: 15vh;
    }
    font-weight:100;
    align-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: rgba(255,255,255,0.2);
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
}
.mb-3 {
  margin-bottom: 16px!important;
  margin-bottom: 1rem!important;
}
a {
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  letter-spacing: 2px;
}
a:hover {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  cursor: pointer;
}
h5 {
  font-weight: 100;
  cursor: pointer;
}

.banner {
  .subtitle{
    font-size: 25px;
  }
}
</style>
