<template>
  <div class="banner-wrapper">
    <TitleText class="banner-title"
               :text="title" textColor="on-background"
               :uppertext="upperTitle" uppertextColor="on-background"/>

    <p class="banner-text">{{text}}</p>
  </div>
</template>

<script>
import TitleText from "@/components/TitleText";
export default {
  name: 'Banner',
  components: {TitleText},
  props: {
    title: String,
    upperTitle: String,
    text: String
  }
}
</script>

<style lang="scss">
.banner-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  padding: base.$unit;
}

.banner-title {
  margin-bottom: 60px;
}

.banner-text {
  font-size: 20px;
  line-height: 135%;
}
</style>
