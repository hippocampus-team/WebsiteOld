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
      cards: [{
        "title": "Этот сайт",
        "text": "Технологический стек этого сайта соответствует ТЗ (Vue.js + aiohttp). Весь контент подгружается с файлов на Яндекс.Диске. Если мы сделали это всего за пару дней, то представляете на что мы способны за неделю?",
        "isAlternative": false,
        "buttons": [
          {
            "text": "Front",
            "link": "https://github.com/HippocampusTeam/Website"
          },
          {
            "text": "Back",
            "link": "https://github.com/HippocampusTeam/WebsiteBackend"
          }
        ]
      },
        {
          "title": "Screen Puzzle",
          "text": "Приложение Сони, которое позволяет собирать мобильные видеостены самых различных форм из подручных Android устройств.",
          "isAlternative": false,
          "buttons": [
            {
              "text": "Видео",
              "link": "https://youtu.be/yk01QIdEeVM"
            },
            {
              "text": "GitHub",
              "link": "https://github.com/DablSi/Screen-3.0"
            }
          ]
        },
        {
          "title": "Фриланс",
          "text": "Андрей фрилансит уже несколько месяцев, делая игры на Unity. За это время было сделано около шести игр различного масштаба и сложности для заказчиков из самых разных стран мира.",
          "isAlternative": true,
          "buttons": [
            {
              "text": "Fiverr",
              "link": "https://www.fiverr.com/andrewlevada"
            }
          ]
        },
        {
          "title": "Etiam",
          "text": "Web-сервис Андрея, реализующий онлайн презентации в новом интересном формате. Сейчас находится в очень активной разработке.",
          "isAlternative": false,
          "buttons": [
            {
              "text": "Сайт",
              "link": "https://etiam.live"
            },
            {
              "text": "Инфо",
              "link": "https://github.com/AndrewLevada/EtiamDocs/blob/master/README.md"
            }
          ]
        },
        {
          "title": "Нейронные сети",
          "text": "С# библиотека Андрея для создания и обучения нейронных сетей, а также наш совместный алгоритм автоматического построения структуры нейронной сети, находящийся в активной разработке.",
          "isAlternative": false,
          "buttons": [
            {
              "text": "GitHub",
              "link": "https://github.com/HippocampusTeam/NeuralNetworksLibrary"
            }
          ]
        },
        {
          "title": "Стажировка Иннополис",
          "text": "Соня была тимлидом направления «Android-разработка» во время дистанционной стажировки Иннополиса. Созданное ее командой приложение, после доработки до продакшена, будет использовано Довузом Иннополиса.",
          "isAlternative": true,
          "buttons": [
            {
              "text": "GitHub",
              "link": "https://github.com/DablSi/Innoapp"
            },
            {
              "text": "Серт",
              "link": "https://drive.google.com/file/d/1En__lX7fv6dK4-P0a4xElSZP7UjRfLaA/view?usp=drivesdk"
            }
          ]
        },
        {
          "title": "ЗаботаФон",
          "text": "Приложение Андрея, защищающие пожилых людей от телефонного мошенничества. Оно работает по принципу белого списка, то есть позвонить защищаемому человеку могут только указанные пользователем номера. Все остальные вызовы будут автоматически блокироваться приложением.",
          "isAlternative": false,
          "buttons": [
            {
              "text": "Google Play",
              "link": "https://play.google.com/store/apps/details?id=com.andrewlevada.carephone"
            }
          ]
        },
        {
          "title": "Regeneron ISEF",
          "text": "Международный конкурс научных и инженерных работ школьников, проходящий в США. Ежегодно десятки миллионов школьников участвуют в научных ярмарках по всему миру, но только около 1800 человек проходит в финал. (Соня стала финалистом, но конкурс был отменён в связи с пандемией)",
          "isAlternative": true,
          "buttons": [
            {
              "text": "Сертификат",
              "link": "https://lh5.googleusercontent.com/i0Agx_rEViQ5L-72lrTGDbBC6KG5XAetQg_lpOfQWF2XtpwbSCoQgjYJWvHNmwK6djad1f46VuphPDhDqojfeBDtlnQPmbHRcqDAm_O-=s2023"
            }
          ]
        },
        {
          "title": "IT школа Samsung",
          "text": "Это - школа Android разработки. Мы по отдельности окончили ее в 2019 и 2020 годах с золотыми дипломами отличия. А также участвовали во всероссийском финальном конкурсе проектов и заняли гран-при и 2 место с проектами ScreenPuzzle (Соня) и ЗаботаФон (Андрей) соответственно.",
          "isAlternative": true,
          "buttons": []
        },
        {
          "title": "Онлайн обучение",
          "text": "Андрей окончил курс по машинному обучению от MIT. А Соня прошла вводный курс Гарвада по компьтерным наукам CS50 и находится в процессе прохождения их же курса по ИИ (CS50AI)",
          "isAlternative": true,
          "buttons": []
        },
        {
          "title": "Офлайн обучение",
          "text": "Андрей окончил трёх-годичный курс обучения в школе ЮФУ по программированию с тремя золотыми дипломами за каждый год, а Соня прошла 1 курс Яндекс.Лицея со статусом суперотличника (это настоящий статус)",
          "isAlternative": true,
          "buttons": []
        }]
    }
  },
  mounted() {
    fetch('https://cv-hippocampus.herokuapp.com/cards')
        .then(response => response.json())
        .then(data => {
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
