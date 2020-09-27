<template>
  <div class="title-wrapper">
    <h2 :class="[uppertextColorClass, alignTextClass]">{{uppertext | uppercase}}</h2>
    <h1 :class="[textColorClass, alignTextClass]">{{text | uppercase}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitleText',
  data() {
    return {
      textColorClass: textColorToClass(this.textColor),
      uppertextColorClass: textColorToClass(this.uppertextColor),
      alignTextClass: {
        "reverse-text": this.reverseAlign
      }
    }
  },
  props: {
    text: String,
    uppertext: String,
    textColor: String,
    uppertextColor: String,
    reverseAlign: Boolean
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    }
  }
}

function textColorToClass(color) {
  return "text-color-" + color;
}

</script>

<style scoped lang="scss">
  h1 {
    font-size: 110px;
  }

  h2 {
    font-size: 62px;
  }

  .reverse-text {
    text-align: right;
  }
</style>
