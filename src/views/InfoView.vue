<template>
  <div id="info" class="info">
    <router-link 
      :to="{
        name: 'home'
      }"
      class="nav-link">Home</router-link>
    <div class="info__text fs-md">
      <p>City light inspired mix series covering widely sourced forward-looking music. Timeless classics alongside fresh new sounds and a lot in-between.</p>
      <p>Left click, kick back and play; right click – save and take it with you. Check back later as we make monthly updates as well.</p>
      <p>Hola: <a href="mailto:hola@looseformat.com">hola@looseformat.com</a></p>
    </div>
    <img src="/static/images/boy.png" alt="" class="info__image" />
  </div>
</template>

<script>
  export default {
    mounted () {
      window.addEventListener('keydown', this.keyHandler)
    },
    destroyed () {
      // destroy to key events
      window.removeEventListener('keydown', this.keyHandler)
    },
    methods: {
      close () {
        this.$router.push('/')
      },
      keyHandler (e) {
        // escape
        if (e.keyCode === 27 || e.keyCode === 38) this.close()
      }
    }
  }
</script>

<style lang="less">
  @import "../less/variables.less";

  .info {
    position: fixed;
    background-color: @red;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: @black;
    padding: @off;

    a {
      color: @black;

      &:hover {
        &:after {
          background-color: @black;
        }
      }        
    }

    &__text {
      font-family: "Times New Roman", Times, serif;
      width: 58%;
    }

    &__image {
      display: block;
      position: absolute;
      bottom: 10%;
      right: 12%;
      width: 28%;
      height: auto;
    }
  }
</style>