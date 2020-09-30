<template>
  <div class="card" :class="isAchievement ? 'variation' : ''">
    <h2 class="card-title">{{title | uppercase}}</h2>
    <p class="card-text">{{text}}</p>

    <div v-if="buttons.length > 0" class="buttons-wrapper" :class="{'alt': isAchievement}">
      <CardButton v-for="(button, i) in buttons" :key="i"
                  :text="button.text"
                  :color="button.color"
                  :link="button.link"/>
    </div>
  </div>
</template>

<script>
import CardButton from "@/components/CardButton";

export default {
  name: 'Card',
  components: {
    CardButton
  },
  props: {
    title: String,
    text: String,
    buttons: Array,
    isAchievement: Boolean
  },
  filters: {
    uppercase(text) {
      return text.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
.card {
  position: relative;

  width: base.$unit * 3;
  // height: base.$unit * 3;
  box-sizing: border-box;

  background-color: base.$surfaceColor;
  @include base.default-box-shadow();

  color: base.$onSurfaceColor;
  border-radius: 60px;
  padding: 40px;

  display: flex;
  flex-direction: column;

  transition: all 600ms;

  &.variation {
    background-color: base.$secondaryColor;
    color: base.$onSecondaryColor;
  }

  &:hover {
    @include base.default-box-shadow-hover();
    transform: translateY(-4px);
  }

  @media screen and (max-width: base.$mwMedium) {
    border-radius: 40px;
    padding: 32px;
  }
}

.card-title {
  font-weight: bold;
  font-size: 2vw;
  line-height: 86%;

  margin-bottom: 32px;

  @media screen and (max-width: base.$mwMedium) {
    margin-bottom: 24px;
  }
}

.card-text {
  font-weight: 500;
  text-align: justify;
  line-height: 130%;

  overflow: hidden;
  flex-grow: 1;

  font-size: 1.2vw;
}

.buttons-wrapper {
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.alt {
    .card-button {
      background-color: base.$surfaceColor !important;

      h3 {
        color: base.$secondaryColor !important;
      }
    }
  }

  .card-button:nth-of-type(2) {
    margin-left: 40px;
  }

  @media screen and (max-width: base.$mwMedium) {
    margin-top: 36px;

    .card-button:nth-of-type(2) {
      margin-left: 32px;
    }
  }
}
</style>
