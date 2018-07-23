<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area" v-for="(item, key) of list" :key="key" :ref="key">
                <div class="key">{{key}}</div>
                <div class="area-list">
                    <div class="item" v-for="innderItem of item" :key="innderItem.id">
                        {{innderItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: ['list', 'letter'],
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.list {
  position: absolute;
  top: 70px;
  bottom: 118px;
  left: 0;
  right: 0;
  overflow: hidden;
  .area {
    .key {
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      background-color: #ddd;
    }
    .area-list {
      .item {
        height: 80px;
        line-height: 80px;
        padding: 0 20px;
        border-bottom: 1px solid #ddd; /*px*/
      }
    }
  }
}
</style>
