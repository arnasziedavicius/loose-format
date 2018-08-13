<template>
  <div id="info" class="info">
    <div class="info__text fs-md">
      <p>City light inspired mix series covering widely sourced, forward-looking music. Timeless classics alongside fresh new sounds and a lot in-between.</p>
      <p>Left click, kick back and play; right click – save and take it with you. Check back later as we make monthly updates as well.</p>
      <p><a href="mailto:hola@looseformat.com">Email</a><br /><a href="https://soundcloud.com/looseformat" target="_blank">Soundcloud</a><br /><a href="https://www.instagram.com/looseformat/" target="_blank">Instagram</a></p>
    </div>
    <img src="/static/images/boy.png" alt="Loose Format" class="info__image" />
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

<style lang='less'>
  @import '../less/variables.less';

  .info {
    position: fixed;
    background-color: @red;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: @black;
    padding: @off + 2.554rem @off @off;
    overflow-y: scroll;

    .mq-md({
      padding: @off;
      overflow-y: hidden;
    });    

    a {
      color: @black;

      &:hover {
        border-color: @black;
      }        
    }

    &__text {
      font-family: 'Times New Roman', Times, serif;
      margin-bottom: 1.15em;

      .mq-md({
        margin-bottom: 0;
        width: 58%;
      });
    }

    &__image {
      display: block;
      height: auto;
      width: 77.34%;

      .mq-sm({
        width: 38%;
        position: absolute;
        bottom: 5%;
        right: 6%;
      });

      .mq-md({
        width: 28%;
        position: absolute;
        bottom: 10%;
        right: 12%;
      });
    }
  }
</style>