<template>
    <div class="aside">
        <ul>
            <li v-for="item of letters" :key="item" @click="handleLettersClick">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  props: ['list'],
  computed: {
    letters () {
      const letters = []
      for (let i in this.list) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLettersClick (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style scoped lang='less'>
.aside{
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    ul{
        li{
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
    }
}
</style>
