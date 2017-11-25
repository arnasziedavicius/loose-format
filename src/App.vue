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
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "dlig" 1, "ss01" 1;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    // font-size: calc(100vw * 44 / 768px);
    font-size: 18px;
    width: 100%;
    min-height: 100%;
    height: auto;    
  }

  ::-webkit-input-placeholder {
    color: @black;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: @black;
  }
  ::-moz-placeholder {  /* Firefox 19+ */
    color: @black;
  }
  :-ms-input-placeholder {
    color: @black;
  }
  ::-moz-selection {
    background: @black;
    color: @white;
  }
  ::-webkit-selection {
    background: rgba(0,0,0,1);
    color: @white;
  }
  ::selection {
    background: rgba(0,0,0,1);
    color: @white;
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
  
  
</style>
