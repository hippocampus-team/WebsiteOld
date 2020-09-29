<template>
  <div id="cards-section" class="section">
    <div class="content-wrapper">
      <Card v-for="(card, i) in cards" :key="i"
            :title="card.title"
            :text="card.text"
            :isAchievement="card.isAchievement"
            :buttons="card.buttons"/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: 'CardsSection',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          title: "Screen Puzzle",
          text: "Приложение Сони, которое позволяет собирать мобильные видеостены самых различных форм из подручных Android устройств.",
          isAlternative: false,
          buttons: [
            {
              text: "Видео",
              color: "#333333",
              link: "https://youtu.be/yk01QIdEeVM"
            },
            {
              text: "GitHub",
              color: "#FF4F6D",
              link: "https://github.com/DablSi/Screen-3.0"
            }
          ]
        },
        {
          title: "More Content",
          text: "More text!",
          isAchievement: false,
          buttons: []
        },
        {
          title: "Title",
          text: "text!",
          isAchievement: false,
          buttons: []
        },
        {
          title: "Title",
          text: "text!",
          isAchievement: false,
          buttons: []
        },
        {
          title: "Title",
          text: "text!",
          isAchievement: true,
          buttons: []
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.content-wrapper {
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    margin-bottom: base.$unit / 2;
  }
}
</style>
