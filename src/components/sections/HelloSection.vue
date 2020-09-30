<template>
  <div id="hello-section" class="section">
    <div class="content-wrapper">
      <TitleText text="Hippocampus" textColor="on-background"
                 uppertext="Команда" uppertextColor="primary"/>

      <div class="hello-text-wrapper">
        <p class="hello-text">{{teambio}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleText from '@/components/TitleText.vue'

export default {
  name: 'HelloSection',
  components: {
    TitleText
  },
  data() {
    return {
      teambio: "В человеческом мозге гипокамп (hippocampus) отвечает за формирование эмоций. Мы же отвечаем за то, чтобы наша работа сделала их только положительными."
    }
  },
  mounted() {
    fetch('https://cv-hippocampus.herokuapp.com/teambio')
        .then(response => response.json())
        .then(data => {
          this.teambio = data;
        });
  }
}
</script>

<style scoped lang="scss">
#hello-section {
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
}

.content-wrapper {
  height: calc(100% - #{base.$unit * 2});

  display: flex;
  flex-direction: column;
}

.hello-text-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .hello-text {
    width: base.$unit * 6;

    font-size: 32px;
    line-height: 46px;

    font-weight: bold;
    color: base.$onBackgroundColor;

    @media screen and (max-width: base.$mwLarge) {
      font-size: 28px;
      line-height: 42px;
    }

    @media screen and (max-width: base.$mwMedium) {
      font-size: 24px;
      line-height: 40px;
    }
  }
}

#hello-section:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;

  width: base.$unit * 6;
  height: base.$unit * 7;

  background: url("../../assets/brain-blob.svg") 0 0/100% auto no-repeat;
}
</style>
