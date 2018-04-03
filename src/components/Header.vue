<template>
  <header class="header">
    <div class="header__top clear">
      <h1><img id="logo" src="../assets/loose-format-logo.svg" alt="logo" /></h1>
    </div>
    <div class="header__bottom">
      <ul class="mix-list">
        <li
          v-for="(item, i) in items"
          :key="i">
          <router-link 
          :to="{
            name: 'item',
            params: {
              slug: item.slug,
            }
          }"
          :data-slug="item.slug" 
          class="link"
          @click.native="scrollToEl($event)"><span class="link__index">{{ i + 1 }}</span><span class="link__title">{{ item.name }} - {{ item.lat }}, {{ item.lng }}</span></router-link>
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
    },
    methods: {
      scrollToEl (event) {
        const el = event.currentTarget
        const slug = el.getAttribute('data-slug')
        const item = document.querySelectorAll(`.item[data-slug="${slug}"]`)
        // get offset based on item left offset
        const adjust = item[0].offsetLeft
        const scrollPos = item[0].offsetTop - adjust
        setTimeout(() => {
          window.scrollTo(0, scrollPos)
        }, 100)
      }
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
    margin-bottom: 6.5rem;

    h1 {
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
    .mq-md({
      column-count: 3;
      column-gap: 10px;
    });    
  }

  .link {
    &__index {
      margin-right: 0.888rem;
      background-image: url('../assets/circle.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 0px 0.388rem 0.055rem 0.388rem;
      display: inline-block;
      vertical-align: bottom;
    }
  }
</style>