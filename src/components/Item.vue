<template>
  <div class="item" :data-slug="item.slug">
    <a 
      :href="item.file" 
      class="item__link button">
      <div class="item__inner">
        <img 
          :src="item.image.src" 
          :width="item.image.width" 
          :height="item.image.height"
          :alt="item.title"
          class="item__image" />
        <span class="item__title link"><span class="link__dot"></span><span class="link__title">{{ item.name }} – {{ item.lat }}, {{ item.lng }}</span></span>          
      </div>
    </a>
    <div class="item__info">
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
    mounted () {
      if (this.$route.params.slug === this.item.slug) {
        const adjust = this.$el.offsetLeft
        setTimeout(() => {
          const scrollPos = this.$el.offsetTop - adjust
          window.scrollTo(0, scrollPos)
        }, 100)
      }
    }
  }
</script>

<style lang="less">
  @import "../less/variables.less";

  .item {
    margin: 0 @off 5.2rem;

    .mq-md({
      width: 58%;
    });

    .link,
    &__link {
      display: block;
    }

    &__link {
      margin-bottom: 2.8em;
      border-bottom: none;
      width: 77.34%;

      .mq-sm({
        width: 50%;
      });

      .mq-md({
        width: 76%;
      });
    }

    &__text {
      margin-bottom: 1em;
    }

    &__inner {
      position: relative;

      &:after {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }

    &__image,
    &__title {
      position: absolute;
      left: 0;
    }

    &__image {
      top: 0;
    }

    &__title {
      bottom: -1.8rem;
      width: 95.734vw;

      .mq-sm({
        width: 97.657vw;
      });

      .mq-md({
        width: auto;
      });      
      
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
