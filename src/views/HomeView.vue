<template>
  <div>
    <app-header></app-header>
    <div class="item-wrap">
      <app-item 
        v-for="(item, i) in items"
        :item="item"
        :key="i"></app-item>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Item from '../components/Item.vue'

  import { mapState } from 'vuex'

  import {soundManager} from 'soundmanager2'
  import BasicMP3Player from '../mp3-player'

  export default {
    components: {
      'app-header': Header,
      'app-item': Item
    },
    computed: {
      ...mapState('site', [
        'items'
      ])
    },
    mounted () {
      // player setup
      window.basicMP3Player = this.basicMP3Player

      soundManager.setup({
        preferFlash: false,
        onready: () => {
          this.basicMP3Player = new BasicMP3Player()
        }
      })
    }
  }
</script>

<style lang="less">
  @import "../less/link.less";
  @import "../less/button.less";
</style>