<template>
  <div class="title-wrapper">
    <h2 v-if="upperLink == null" :class="['uppertext', uppertextColorClass, alignTextClass]">{{uppertext | uppercase}}</h2>
    <a v-else :class="['uppertext', uppertextColorClass, alignTextClass]"
       :href="upperLink">{{uppertext | uppercase}}</a>

    <h1 :class="['text', textColorClass, alignTextClass]">{{text | uppercase}}</h1>
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
    reverseAlign: Boolean,
    upperLink: String
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

<style lang="scss">
  .title-wrapper a {
    font-family: Rubik, sans-serif;
    text-decoration: none;
  }

  .text {
    font-size: 102px;

    @media screen and (max-width: base.$mwLarge) {
      font-size: 86px;
    }

    @media screen and (max-width: base.$mwMedium) {
      font-size: 74px;
    }

    @media screen and (max-width: base.$mwNormal) {
      font-size: 64px;
    }
  }

  .uppertext {
    font-size: 62px;

    @media screen and (max-width: base.$mwLarge) {
      font-size: 52px;
    }

    @media screen and (max-width: base.$mwMedium) {
      font-size: 46px;
    }

    @media screen and (max-width: base.$mwNormal) {
      font-size: 36px;
    }
  }

  .reverse-text {
    text-align: right;
  }
</style>
