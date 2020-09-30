<template>
  <div id="cards-section" class="section">
    <div class="content-wrapper">
      <Card v-for="(card, i) in cards" :key="i"
            :title="card.title"
            :text="card.text"
            :isAchievement="card.isAlternative"
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
      cards: []
    }
  },
  mounted() {
    fetch('https://cv-hippocampus.herokuapp.com/cards')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.cards = data;
        });
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
