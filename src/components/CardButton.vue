<template>
  <a class="card-button" :href="link">
    <h3>{{text | uppercase}}</h3>
  </a>
</template>

<script>
export default {
  name: 'CardButton',
  props: {
    text: String,
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
  padding: 20px 0;

  background-color: base.$secondaryColor;
  text-decoration: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 40px;

  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 150ms;

  @media screen and (max-width: base.$mwMedium) {
    padding: 16px 0;
  }

  &:hover {
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }

  &:focus {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(2px);
  }

  h3 {
    font-size: 1.5vw;
    line-height: 86%;
    color: base.$onPrimaryColor;
  }
}
</style>
