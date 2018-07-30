<template>
  <div class="timeline" ref="wrapper">
    <md-steppers md-vertical>
      <md-step id="first" md-label="First Step" md-description="Optional">
        hah 
      </md-step>

      <md-step id="second" md-label="Second Step">
        hah
      </md-step>

      <md-step id="third" md-label="Third Step">
        hah
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Timeline',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang='less'>
.timeline{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
