<template>
  <div class="person-bio-wrapper">
    <h2 class="person-bio-name uppertext">{{name | uppercase}}</h2>
    <p class="person-bio-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'PersonBio',
  props: {
    name: String,
    text: String
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    }
  }
}
</script>

<style scoped lang="scss">
.person-bio-wrapper {
  color: base.$onPrimaryColor;

  .person-bio-name {
    margin-bottom: 40px;
  }

  p {
    font-weight: 400;
    text-align: justify;
    line-height: 140%;
    font-size: 1.2vw;
  }
}
</style>
