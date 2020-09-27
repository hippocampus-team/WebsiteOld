<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TitleText text="Hippocampus" uppertext="Команда"/>
  </div>
</template>

<script>
import TitleText from './components/TitleText.vue'

export default {
  name: 'App',
  components: {
    TitleText
  }
}
</script>

<style scoped lang="scss">
#app {
  margin: $unit;
}
</style>
