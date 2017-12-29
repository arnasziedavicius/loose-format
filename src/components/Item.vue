<template>
  <div class="item" :data-slug="item.slug">
    <img 
      :src="item.image.src" 
      :width="item.image.width" 
      :height="item.image.height" 
      :alt="item.title" 
      class="item__image" />
    <div class="item__info">
      <h3 class="item__title"><span class="dot"></span><a href="#">{{ item.name }} – {{ item.lat }}, {{ item.lng }}</a></h3>
      <div class="item__text" v-html="item.text"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: [Array, Object]
      }
    },
    mounted() {
      if (this.$route.params.slug === this.item.slug) {
        const scrollPos = this.$el.offsetTop;
        setTimeout(() => {
          window.scrollTo(0, scrollPos);
        }, 100);
      }
    },
  }
</script>

<style lang="less">
  @import "../less/variables.less";

  .item {
    width: 58%;
    margin-left: @off;
    margin-right: @off;
    margin-bottom: 7.44rem;

    &__title {
      .dot {
        border-radius: 100%;
        background-color: white;
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 16px;
        vertical-align: bottom;
      }
    }

    &__text {
      margin-bottom: 1em;
    }

    &__image {
      display: block;
      width: 76%;
      // margin-left: auto;
      // margin-right: auto; 
      margin-bottom: 0.5em;
    }

    &__info {
      &__bottom {
        a {
          margin-right: 32px;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
