<template>
  <div id="app">
    <HelloSection/>
    <BioSection/>
    <CardsSection/>
    <ContactSection/>
  </div>
</template>

<script>
import HelloSection from '@/components/sections/HelloSection.vue'
import BioSection from "@/components/sections/BioSection.vue";
import CardsSection from "@/components/sections/CardsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

export default {
  name: 'App',
  components: {
    ContactSection,
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
  margin: base.$unit base.$unit 0;
}
</style>
