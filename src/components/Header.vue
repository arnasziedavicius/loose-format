<template>
  <header class="header">
    <div class="header__top clear">
      <h1><img id="logo" src="../assets/loose-format-logo.svg" alt="logo" /></h1>
      <nav class="nav nav--main">
        <ul>
          <li><a href="#">Info</a></li>
          <li><a href="mail:info@looseformat.com">Email</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__bottom">
      <!-- <span>Latest:</span> -->
      <ul class="mix-list">
        <li
          v-for="(item, i) in items">
          <span class="count">{{ i + 1 }}</span> <a href="">{{ item.name }} - {{ item.lat }}, {{ item.lng }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('site', [
        'items'
      ])
    }
  }
</script>

<style lang="less">
  @import "../less/variables.less";

  #logo {
    display: block;
    width: 77.34vw;
  }

  .header {
    margin-top: @off;
    margin-left: @off;
    margin-right: @off;
    position: relative;
    margin-bottom: 7.44rem;

    h1 {
      float: left;
      display: block;
    }

    &__top {
      margin-bottom: 0.5em;
    }
  }

  .nav {
    text-align: right;

    &--main {
      float: right;
    }
  }

  .mix-list {
    column-count: 3;
    column-gap: 10px;
  }

  .count {
    margin-right: 16px;
    background-image: url('../assets/circle.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 7px 1px 7px;
    display: inline-block;
  }
</style>