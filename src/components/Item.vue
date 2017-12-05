<template>
  <div class="item">
    <img 
      :src="item.image.src" 
      :width="item.image.width" 
      :height="item.image.height" 
      :alt="item.title" 
      class="item__image" />
    <div class="item__info">
      <h3 class="item__title">{{ item.name }} – {{ item.lat }} {{ item.lng }}</h3>
      <div class="item__text" v-html="item.text"></div>
      <div class="item__info__bottom">
        <span class="play"><a href="#">Play</a></span>
        <span class="duration">{{ item.duration }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: [Array, Object]
      }
    }
  }
</script>

<style lang="less">

  .item {
    width: 58%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8.68rem;

    &__text {
      margin-bottom: 1em;
    }

    &__image {
      display: block;
      width: 72%;
      margin-left: auto;
      margin-right: auto; 
      margin-bottom: 0.5em;
    }

    &__info {
      &__bottom {
        span {
          margin-right: 32px;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
