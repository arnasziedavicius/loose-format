<template>
  <div>
    <app-header></app-header>
    <div class="item-wrap">
      <app-item 
        v-for="(item, i) in items"
        :item="item"></app-item>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Item from '../components/Item.vue'

  import { mapState } from 'vuex'

  export default {
    components: {
      'app-header': Header,
      'app-item': Item
    },
    computed: {
      ...mapState('site', [
        'items'
      ])
    }
  }
</script>

<style lang="less">

</style>