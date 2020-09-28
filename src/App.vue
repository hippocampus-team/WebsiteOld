<template>
  <div id="app">
    <HelloSection/>
    <BioSection/>
    <CardsSection/>
  </div>
</template>

<script>
import HelloSection from '@/components/sections/HelloSection.vue'
import BioSection from "@/components/sections/BioSection.vue";
import CardsSection from "@/components/sections/CardsSection";

export default {
  name: 'App',
  components: {
    CardsSection,
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
  position: relative;
  margin: base.$unit;
}
</style>
