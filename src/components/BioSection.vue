<template>
  <div id="bio-section" class="section">
    <div class="content-wrapper">
      <TitleText class="projects-title"
                 text="Проекты" textColor="on-primary"
                 uppertext="Наши" uppertextColor="on-primary"/>

      <TitleText class="other-title" :reverse-align="true"
                 text="Другое" textColor="secondary"
                 uppertext="И" uppertextColor="secondary"/>
    </div>
  </div>
</template>

<script>
import TitleText from "@/components/TitleText";

export default {
  name: 'BioSection',
  components: {
    TitleText
  }
}
</script>

<style scoped lang="scss">
.content-wrapper {
  position: relative;
  height: base.$unit * 8;

  display: flex;
  flex-direction: column;
}

.projects-title {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.other-title {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

#bio-section {
  height: base.$unit * 10;
}

#bio-section:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;

  width: 100vw;
  height: base.$unit * 10;

  background: url("../assets/bio-blob.svg") 0 0/100% auto no-repeat;
  z-index: 0;
}
</style>
