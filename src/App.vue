<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import "./less/normalize.less";
  @import "./less/typography.less";
  @import "./less/variables.less";
  @import "./less/helpers.less";

  html, body {
    background: @black;
    color: @white;
    font-family: HelveticaNeueMedium, HelveticaNeue-Medium, "Helvetica Neue Medium", HelveticaNeue, "Helvetica Neue", TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial, sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "dlig" 1, "ss01" 1;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-size: 1.406vw;
    line-height: 1.333;
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: @white;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: @white;
  }
  ::-moz-placeholder {  /* Firefox 19+ */
    color: @white;
  }
  :-ms-input-placeholder {
    color: @white;
  }
  ::-moz-selection {
    background: @red;
    color: @black;
  }
  ::-webkit-selection {
    background: rgba(255, 0, 0, 1);
    color: @black;
  }
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

  .nav-link {
    position: fixed;
    top: @off;
    right: @off;
    z-index: 1;
    display: block;
  }
</style>
