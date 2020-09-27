<template>
  <div id="cards-section" class="section">
    <div class="content-wrapper">
      <Card v-for="(card, i) in cards" :key="i"
            :title="card.title"
            :text="card.text"/>
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
          title: "Title",
          text: "text!",
          isAchievement: false,
          buttons: [
            {
              text: "Click",
              color: "#ffffff",
              link: "url"
            }
          ]
        },
        {
          title: "More Content",
          text: "More text!"
        },
        {
          title: "Title",
          text: "text!"
        },
        {
          title: "Title",
          text: "text!"
        },
        {
          title: "Title",
          text: "text!"
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
  row-gap: base.$unit / 2;
  justify-content: space-between;
}
</style>
