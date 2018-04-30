<template>
  <b-container fluid class="header-outter">
    <b-container class="header-inner">
      <div class="left-side">
        D<span>M</span>
      </div>

      <div class="right-side">
        <b-row>
          <!-- <b-col>
            <a href="#">Blog</a>
          </b-col> -->
          <b-col>
            <a href="https://github.com/danielgmartins" target="_blank"><i class="fab fa-github"></i></a>
          </b-col>
          <b-col>
            <a href="https://twitter.com/danielgcmartins" target="_blank"><i class="fab fa-twitter"></i></a>
          </b-col>
          <b-col>
            <a href="https://www.linkedin.com/in/daniel-martins-607672a4/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </b-col>
          <b-col>
            <a href="mailto:danielgcmartins@gmail.com" target="_blank"><i class="fas fa-envelope-open"></i></a>
          </b-col>
        </b-row>
      </div>  
    </b-container>
  </b-container>
</template>

<style lang="scss">

.header-outter {
  width: 100%;
  height: 30vh;
  max-height: 100vh;
  display:block;
  color: rgba(255,255,255,0.5);
  font-size: 20px;
  padding:{
    top: 0vh;
  }
}

.header-inner {
  width: 100%;
  /* height: 100%; */
  max-width: 1000px;
  // margin: auto;
  margin-top: 10vh;
  position: relative;
}

.left-side {
  float: left;
  font-weight: 200;
  font-size: 25px;
  letter-spacing: 1.5px;
  word-spacing: 0px;
  // background-color: rgb(19, 64, 102);
  border-radius:1px;
  // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  padding:{
    top: 1px;
    bottom: 1px;
    right: 10px;
    left: 10px;
  }
  color: white;
}
.left-side span {
  font-weight: 500;
}

.right-side {
  float:right;
  bottom:0px;

  height: 100%;
}

.col {
  display: inline-block;
  vertical-align: center;
  font-size: 20px;
  font-weight: 200;
  padding:{
    left: 10px;
    right:10px;
  }
  cursor: pointer;
  a {
    color: rgba(255,255,255,0.5);
    letter-spacing: 2px;
    cursor: pointer;
    i {
      cursor: pointer;
    }
  }
  a:hover {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    cursor: pointer;
    i {
      cursor: pointer;
    }
  }
}


</style>
