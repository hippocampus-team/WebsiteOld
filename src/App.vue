<template>
  <div id="app">
    <div id="page-wrapper">
      <TitleText text="Hippocampus" text-color="primary"
                 uppertext="Команда" uppertext-color="onBackground"/>
    </div>
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
#page-wrapper {
  margin: $unit;
}
</style>
