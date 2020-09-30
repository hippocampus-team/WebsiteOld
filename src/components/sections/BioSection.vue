<template>
  <div id="bio-section" class="section">
    <div class="content-wrapper">
      <TitleText class="bio-title"
                 text="Про нас" textColor="on-primary"
                 uppertext="Немного" uppertextColor="on-primary"/>

      <div class="bios-wrapper">
        <PersonBio v-for="(bio, i) in bios" :key="i"
                   :name="bio.name" :text="bio.text"/>
      </div>

      <div class="bio-avatars-wrapper">
        <img class="bio-avatar" src="@/assets/avatar_andrew.svg" alt="">
        <img class="bio-avatar" src="@/assets/avatar_sonia.svg" alt="">
      </div>

      <TitleText class="projects-title"
                 text="Проекты" textColor="on-primary"
                 uppertext="Наши" uppertextColor="on-primary"/>

      <TitleText class="other-title" :reverse-align="true"
                 text="Другое" textColor="secondary"
                 uppertext="И" uppertextColor="secondary"/>
    </div>
  </div>
</template>

<script>
import TitleText from "@/components/TitleText";
import PersonBio from "@/components/PersonBio";

export default {
  name: 'BioSection',
  components: {
    PersonBio,
    TitleText
  },
  data() {
    return {
      bios: [
        {
          name: "Софья Ткаченко",
          text: "Пятнадцатилетний гиперактивный экстраверт. Буду писать backend на Python. Люблю мультикисериалы, выступать с проектами, читать случайные научные работы и мозгодробящие задачи. Ну и, конечно же, программирование, ведь оно позволяет мне объединить все эти абсурдные пристрастия :^)"
        },
        {
          name: "Андрей Левада",
          text: "Провожу тонну времени полностью погружённым либо в проекты, либо в сериалы. Сочетаю в себе искромётно-несмешной юмор, лидерские качества, ужасающий цинизм, не менее ужасающе огромное дружелюбие, невообразимую любовь к UI/UX дизайну, к элегантным алгоритмам и к решению нерешаемых задач."
        },
      ]
    }
  },
  mounted() {
    fetch('https://cv-hippocampus.herokuapp.com/bios')
        .then(response => response.json())
        .then(data => {
          this.bios = data;
        });
  }
}
</script>

<style scoped lang="scss">
.content-wrapper {
  position: relative;
  height: base.$unit * 8;

  display: flex;
  flex-direction: column;
}

.bio-title {
  margin-top: 40px;
  margin-bottom: base.$unit;
}

.bios-wrapper {
  display: flex;
  flex-direction: row;
  margin-right: base.$unit;

  div:nth-of-type(2) {
    margin-left: base.$unit;
  }
}

.bio-avatars-wrapper {
  width: base.$unit * 1.8;

  position: absolute;
  top: base.$unit;
  right: - base.$unit;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: base.$mwNormal) {
    top: 0;
  }
}

.projects-title {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.other-title {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

#bio-section {
  height: base.$unit * 10;
  overflow: visible;
}

#bio-section:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;

  width: 100vw;
  height: base.$unit * 10;

  background: url("../../assets/bio-blob.svg") 0 0/100% auto no-repeat;
  z-index: 0;
  overflow: visible;
}
</style>
