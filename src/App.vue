<template>
  <div id="app">
    <router-link 
      :to="{ name: infoLinkName }"
      id="info-link"
      :class="{ 'black' : isOnInfo }">{{ infoLinkTitle }}</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isOnInfo () {
        return this.$route.name === 'info'
      },
      infoLinkName () {
        console.log(this.$route.name);
        return this.$route.name === 'info' ? 'home' : 'info'
      },
      infoLinkTitle () {
        return this.$route.name === 'info' ? 'Home' : 'Info'
      }
    }
  }
</script>

<style lang="less">
  @import './less/normalize.less';
  @import './less/typography.less';
  @import './less/variables.less';
  @import './less/helpers.less';

  html, body {
    background: @black;
    color: @white;
    font-family: HelveticaNeueMedium, HelveticaNeue-Medium, 'Helvetica Neue Medium', HelveticaNeue, 'Helvetica Neue', TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial, sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern' 1, 'dlig' 1, 'ss01' 1;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-size: 4.266vw;// 16px / 375px
    line-height: 1.3;
    width: 100%;
    min-height: 100%;
    height: auto;

    .mq-sm({
      font-size: 2.343vw;// 18px / 768px
    });

    .mq-md({
      font-size: 1.406vw;// 18px / 1280px
    });
  }

  ::-webkit-input-placeholder,
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder {
    color: @white;
  }

  ::-moz-selection {
    background: @red;
    color: @black;
  }
  ::-webkit-selection,
  ::selection {
    background: rgba(255, 0, 0, 1);
    color: @black;
  }

  img {
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #info-link {
    position: fixed;
    top: 0.3rem;
    right: @off;
    z-index: 9;
    display: block;
  }
</style>
