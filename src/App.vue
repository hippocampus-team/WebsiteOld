<template>
  <div id="app">
    <HelloSection/>
    <BioSection/>
  </div>
</template>

<script>
import HelloSection from '@/components/HelloSection.vue'
import BioSection from "@/components/BioSection.vue";

export default {
  name: 'App',
  components: {
    HelloSection,
    BioSection
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
}

.section {
  position: relative;
}

.content-wrapper {
  margin: base.$unit;
}
</style>
