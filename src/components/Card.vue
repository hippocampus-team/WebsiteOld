<template>
  <div class="card" :class="isAchievement ? 'variation' : ''">
    <h2 class="card-title">{{title | uppercase}}</h2>
    <p class="card-text">{{text}}</p>

    <div class="buttons-wrapper" v-if="buttons.length > 0">
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

<style lang="scss">
.card {
  position: relative;

  width: base.$unit * 3;
  height: base.$unit * 3;

  background-color: base.$surfaceColor;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 60px;

  color: base.$onSurfaceColor;

  transition: all 600ms;

  &.variation {
    background-color: base.$secondaryColor;
    color: base.$onSecondaryColor;
  }

  &:hover {
    box-shadow: 0 4px 80px rgba(0, 0, 0, 0.25);
    transform: translateY(-4px);
  }
}

.card-title {
  margin: 40px 40px 0 40px;
  font-weight: bold;
  font-size: 2vw;
  line-height: 86%;
}

.card-text {
  margin: 28px 40px 40px;
  font-weight: 500;
  text-align: justify;
  line-height: 130%;

  font-size: 1.2vw;
}

.buttons-wrapper {
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: calc(100% - 40px * 2);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 40px;
}
</style>
