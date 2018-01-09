<template>
  <div id="info" class="info">
    <router-link 
      :to="{
        name: 'home'
      }"
      class="nav-link">Home</router-link>
    <div class="info__text fs-md">
      <!-- <p>City light inspired mix series.</p> -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Contact: <a href="mailto:info@looseformat.com">info@looseformat.com</a></p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
  @import "../less/variables.less";

  .info {
    background-color: @red;
    min-height: 100%;
    min-height: 100vh;
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
  }
</style>