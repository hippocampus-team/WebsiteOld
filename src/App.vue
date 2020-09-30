<template>
  <div id="app" v-if="viewportWidth > 1020">
    <HelloSection/>
    <BioSection/>
    <CardsSection/>
    <ContactSection/>
  </div>

  <Banner upper-title="Грусть" title="Печаль" v-else
          text="К сожалению, из-за короткого срока разработки сайта, мы не успели адаптировать его под мобильные устройства :("/>
</template>

<script>
import HelloSection from '@/components/sections/HelloSection.vue'
import BioSection from "@/components/sections/BioSection.vue";
import CardsSection from "@/components/sections/CardsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {
    Banner,
    ContactSection,
    CardsSection,
    HelloSection,
    BioSection
  },
  data() {
    return {
      viewportWidth: window.innerWidth
    }
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
