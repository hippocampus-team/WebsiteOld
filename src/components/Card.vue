<template>
  <div class="card">
    <h2 class="card-title">{{title | uppercase}}</h2>
    <p class="card-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {

    }
  },
  props: {
    title: String,
    text: String,
    buttons: Object,
    isAchievement: Boolean
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: base.$unit * 3;
  height: base.$unit * 3;

  background-color: base.$surfaceColor;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
}

.card-title {
  margin: 40px 40px 0 40px;
  font-size: 42px;
  font-weight: bold;
  line-height: 86%;
}

.card-text {
  margin: 40px;
  font-weight: normal;
  font-size: 24px;
  line-height: 120%;
  text-align: justify;
}
</style>
