<template>
  <a class="card-button" :style="{ background: color }" :href="link">
    <h3>{{text | uppercase}}</h3>
  </a>
</template>

<script>
export default {
  name: 'CardButton',
  props: {
    text: String,
    color: String,
    link: String
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
.card-button {
  height: 100px;

  text-decoration: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 40px;

  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 28px;
    line-height: 32px;
    color: base.$onPrimaryColor;
  }
}
</style>
