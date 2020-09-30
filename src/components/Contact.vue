<template>
  <div class="contact-wrapper">
    <h3 :class="['contact-name', textColorClass, alignTextClass]">{{name| uppercase}}</h3>

    <a :class="['contact-info', textColorClass, alignTextClass]" :href="link" target="_blank">
      <h4>{{info | uppercase}}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      textColorClass: textColorToClass(this.textColor),
      alignTextClass: {
        "reverse-text": this.reverseAlign
      }
    }
  },
  props: {
    name: String,
    info: String,
    textColor: String,
    reverseAlign: Boolean,
    link: String
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
.contact-wrapper:hover {
  .contact-info {
    &.text-color-on-background {
      color: base.$primaryColor;
    }

    &.text-color-on-secondary {
      color: base.$onBackgroundColor;
    }
  }
}

a {
  font-family: Rubik, sans-serif;
  text-decoration: none;
}

.contact-name {
  margin-bottom: 8px;

  font-size: 58px;

  @media screen and (max-width: base.$mwLarge) {
    font-size: 48px;
  }

  @media screen and (max-width: base.$mwMedium) {
    font-size: 42px;
  }

  @media screen and (max-width: base.$mwNormal) {
    font-size: 32px;
  }
}

.contact-info {
  transition: all 300ms;
  font-size: 48px;

  @media screen and (max-width: base.$mwLarge) {
    font-size: 36px;
  }

  @media screen and (max-width: base.$mwMedium) {
    font-size: 32px;
  }

  @media screen and (max-width: base.$mwNormal) {
    font-size: 22px;
  }
}

.reverse-text {
  text-align: right;
}
</style>
